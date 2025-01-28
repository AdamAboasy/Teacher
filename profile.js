document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user data from local storage
    const savedData = localStorage.getItem('userData');

    if (savedData) {
        const userData = JSON.parse(savedData); // Convert JSON string back to an object
        console.log('Username:', userData.username);
        console.log('Email:', userData.email);

        // Display the image if it exists
        if (userData.image) {
            document.getElementById('profileImage').src = userData.image;
        }

        // Display the data on the page
        document.getElementById('welcomeMessage').textContent = `${userData.username}`;

        // Populate the form fields
        document.getElementById('username').value = userData.username;
        document.getElementById('email').value = userData.email;
        document.getElementById('image').value = userData.image;
    } else {
        console.log('No user data found in local storage.');
        document.getElementById('welcomeMessage').textContent = 'No user data found.';
    }

    // Add a click event listener to the profile image
    document.getElementById("profileImage").addEventListener("click", function() {
        console.log("Image clicked!"); // Check if this appears in the console
        window.open("image.html");
    });

    // Add a click event listener to the back button
    document.getElementById("backButton").addEventListener("click", function() {
        window.location.href = "welcome.html"; // Redirect to the home page
    });

    // Add a click event listener to the logout button
    document.getElementById("logoutButton").addEventListener("click", function() {
        localStorage.removeItem('userData'); // Clear user data
        window.location.href = "signout.html"; // Redirect to the login page
    });

    // Add a submit event listener to the profile form
    document.getElementById("profileForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get updated user data from the form
        const updatedUserData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            image: document.getElementById('image').value,
        };

        // Save updated data to local storage
        localStorage.setItem('userData', JSON.stringify(updatedUserData));

        // Update the displayed data
        document.getElementById('welcomeMessage').textContent = `${updatedUserData.username}`;
        document.getElementById('profileImage').src = updatedUserData.image;

        alert('Profile updated successfully!');
    });

    // // Add a click event listener to the theme toggle button
    // const themeToggle = document.getElementById('themeToggle');

    // // Function to set the theme based on localStorage
    // function setThemeFromLocalStorage() {
    //     const savedTheme = localStorage.getItem('theme'); // Get the saved theme from localStorage
    //     if (savedTheme === 'light-mode') {
    //         document.body.classList.add('light-mode'); // Apply light mode
    //         themeToggle.textContent = '☀️'; // Update the button text
    //     } else {
    //         document.body.classList.remove('light-mode'); // Apply dark mode
    //         themeToggle.textContent = '🌙'; // Update the button text
    //     }
    // }

    // Set the initial theme when the page loads
    setThemeFromLocalStorage();

    // // Add a click event listener to the theme toggle button
    // themeToggle.addEventListener('click', function() {
    //     document.body.classList.toggle('light-mode'); // Toggle the theme
    //     const isLightMode = document.body.classList.contains('light-mode');

    //     // Save the theme preference in localStorage
    //     localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');

    //     // Update the button text
    //     themeToggle.textContent = isLightMode ? '☀️' : '🌙';
    // });
});