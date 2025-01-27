// Retrieve user data from local storage
const savedData = localStorage.getItem('userData');

if (savedData) {
    const userData = JSON.parse(savedData); // Convert JSON string back to an object
    console.log('Username:', userData.username);
    console.log('Email:', userData.email);

    // Display the data on the page (optional)
    document.getElementById('welcomeMessage').textContent = `Welcome, ${userData.username} !`;
} else {
    console.log('No user data found in local storage.');
    document.getElementById('welcomeMessage').textContent = 'No user data found.';
}