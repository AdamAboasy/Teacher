// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === "admin" && password === "password123") {
        messageElement.textContent = "Login successful! Redirecting...";
        messageElement.style.color = "green";

        // Redirect to the dashboard after 2 seconds
        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 2000);
    } else {
        messageElement.textContent = "Invalid username or password!";
        messageElement.style.color = "red";
    }
});
