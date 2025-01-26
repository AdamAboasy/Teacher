document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const messageElement = document.getElementById('message');

    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        return;
    }

    // Simulate a successful sign-up
    messageElement.textContent = 'Sign up successful! Redirecting...';
    messageElement.style.color = 'green';

    // Redirect to another page after 2 seconds
    setTimeout(function() {
        window.location.href = 'welcome.html' // Replace with your desired page
    }, 2000); // 2000 milliseconds = 2 seconds
});