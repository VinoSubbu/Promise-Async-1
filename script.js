document.addEventListener('DOMContentLoaded', function() {
  const fetchUserBtn = document.getElementById('fetch-user-btn');
  const userInfoDiv = document.getElementById('user-info');

  fetchUserBtn.addEventListener('click', fetchRandomUser);

  // Fetch random user information from the API
  function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayUserInfo(data.results[0]);
      })
      .catch(error => {
        userInfoDiv.innerHTML = `<div class="alert alert-danger">Failed to fetch user data: ${error.message}</div>`;
      });
  }

  // Display user information on the webpage
  function displayUserInfo(user) {
    const userHtml = `
      <div class="text-center">
        <img src="${user.picture.large}" alt="User Photo" class="user-photo">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    userInfoDiv.innerHTML = userHtml;
  }
});
