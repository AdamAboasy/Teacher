// Ensure the DOM is fully loaded before running the script
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
        document.getElementById('welcomeMessage').textContent = `Welcome, ${userData.username}!`;
    } else {
        console.log('No user data found in local storage.');
        document.getElementById('welcomeMessage').textContent = 'No user data found.';
    }

    // Add a click event listener to the profile image
    document.getElementById("profileImage").addEventListener("click", function() {
        console.log("Image clicked!"); // Check if this appears in the console
        window.open("profile.html");
    });
});
