// DOM Elements
const body = document.body;
const heading = document.getElementById('heading');
const description = document.getElementById('description');

// Load saved settings from localStorage
function loadSettings() {
    // Load background color
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        body.style.backgroundColor = savedColor;
    }

    // Load language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
}

// Change language
function changeLanguage(lang) {
    if (lang === 'ar') {
        body.setAttribute('dir', 'rtl'); // Right-to-left for Arabic
        heading.textContent = 'مرحبًا بكم في صفحة الترحيب';
        description.textContent = 'هذه الصفحة ترحب بكم.';
    } else {
        body.setAttribute('dir', 'ltr'); // Left-to-right for English
        heading.textContent = 'Welcome to the Welcome Page';
        description.textContent = 'This page welcomes you.';
    }
}

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', loadSettings);
