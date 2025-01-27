// DOM Elements
const body = document.body;
const backgroundColorInput = document.getElementById('backgroundColor');
const languageSelect = document.getElementById('language');
const heading = document.getElementById('heading');
const description = document.getElementById('description');
const backButton = document.getElementById('backButton'); // Back button

// Load saved settings from localStorage
function loadSettings() {
    // Load background color
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        body.style.backgroundColor = savedColor;
        backgroundColorInput.value = savedColor;
    }

    // Load language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        changeLanguage(savedLanguage);
    }
}

// Change background color
function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color); // Save to localStorage
}

// Change language
function changeLanguage(lang) {
    if (lang === 'ar') {
        body.setAttribute('dir', 'rtl'); // Right-to-left for Arabic
        heading.textContent = 'مرحبًا بكم في صفحة الإعدادات';
        description.textContent = 'هذه الصفحة تتيح لك تخصيص تجربتك.';
        backButton.textContent = 'رجوع'; // Change back button text for Arabic
    } else {
        body.setAttribute('dir', 'ltr'); // Left-to-right for English
        heading.textContent = 'Welcome to the Settings Page';
        description.textContent = 'This page allows you to customize your experience.';
        backButton.textContent = 'Back'; // Change back button text for English
    }
    localStorage.setItem('language', lang); // Save to localStorage
}

// Event Listeners
backgroundColorInput.addEventListener('input', (e) => {
    changeBackgroundColor(e.target.value);
});

languageSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

// Back button functionality
backButton.addEventListener('click', () => {
    window.history.back(); // Go back to the previous page
});

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', loadSettings);
