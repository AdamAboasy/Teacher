// Simulate a user session (for demonstration purposes)
let isLoggedIn = true;

// Add event listener to the sign-out button
document.getElementById('signOutButton').addEventListener('click', function() {
    // Clear the session (in a real app, this would involve server-side logic)
    isLoggedIn = false;
    alert('You have been signed out.');

    // Redirect to the login page
    window.location.href = 'login.html';
});