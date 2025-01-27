document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const imageFile = document.getElementById('image').files[0]; // Get the uploaded image file

    const messageElement = document.getElementById('message');

    // Check if passwords match
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        messageElement.style.color = 'red';
        return;
    }

    // Convert image to base64
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageBase64 = event.target.result; // Get base64 string

            // Save user data to local storage
            const userData = {
                username: username,
                email: email,
                password: password, // Note: In a real application, never store plain-text passwords!
                image: imageBase64 // Save the image as base64
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
        };
        reader.readAsDataURL(imageFile); // Convert image to base64
    } else {
        messageElement.textContent = 'Please upload an image!';
        messageElement.style.color = 'red';
    }
});
