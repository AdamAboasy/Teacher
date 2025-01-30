document.addEventListener("DOMContentLoaded", function () {
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
    document.getElementById("profileImage").addEventListener("click", function () {
        console.log("Image clicked!"); // Check if this appears in the console
        window.open("profile.html");
    });

    // Search Functionality
    document.getElementById('searchButton').addEventListener('click', function () {
        const searchQuery = document.getElementById('searchInput').value.toLowerCase();
        const headers = document.querySelectorAll('h2,h3, h4'); // Select all h3 and h4 elements

        headers.forEach(header => {
            const text = header.textContent.toLowerCase();
            if (text.includes(searchQuery)) {
                header.scrollIntoView({ behavior: 'smooth', block: 'start' });
                header.style.backgroundColor = 'black'; // Highlight the found element
                setTimeout(() => {
                    header.style.backgroundColor = ''; // Remove highlight after 2 seconds
                }, 2000);
            }
        });
    });
});
