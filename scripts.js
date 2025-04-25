let isLoggedIn = false;  // Track login state

// Simulate login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-name').value;
  const password = document.getElementById('login-password').value;

  // For simplicity, if username and password are filled, consider user logged in
  if (username && password) {
    isLoggedIn = true;
    alert('Login successful!');
    updateDonationSection();
  }
});

// Update the donation section based on login state
function updateDonationSection() {
  const donationMessage = document.getElementById('donation-message');
  const donateButton = document.getElementById('donate-button');

  if (isLoggedIn) {
    donationMessage.textContent = "You can now donate!";
    donateButton.textContent = "Donate Now";
    donateButton.onclick = function() {
      alert('Thank you for your donation!');
    };
  } else {
    donationMessage.textContent = "Please log in to donate.";
    donateButton.textContent = "Login to Donate";
    donateButton.onclick = function() {
      alert('Please log in first!');
    };
  }
}

// Initially, update the donation section
updateDonationSection();
