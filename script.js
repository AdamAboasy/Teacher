// DOM Elements
const body = document.body;
const backgroundColorInput = document.getElementById('backgroundColor');
const languageSelect = document.getElementById('language');
const heading = document.getElementById('heading');
const description = document.getElementById('description');

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
    } else {
        body.setAttribute('dir', 'ltr'); // Left-to-right for English
        heading.textContent = 'Welcome to the Settings Page';
        description.textContent = 'This page allows you to customize your experience.';
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

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', loadSettings);