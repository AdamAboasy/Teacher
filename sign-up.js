document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const messageElement = document.getElementById('message');

    // Check if passwords match
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        messageElement.style.color = 'red';
        return;
    }

    // Save user data to local storage
    const userData = {
        username: username,
        email: email,
        password: password // Note: In a real application, never store plain-text passwords!
    };

    // Convert the object to a JSON string and save it in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Display success message
    messageElement.textContent = 'Sign up successful! Redirecting...';
    messageElement.style.color = 'green';

    // Redirect to another page after 2 seconds
    setTimeout(function() {
        window.location.href = 'welcome.html'; // Replace with your desired page
    }, 2000); // 2000 milliseconds = 2 seconds
});
