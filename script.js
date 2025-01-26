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

localStorage.setItem(changeBackgroundColor);
// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color); // Save to LocalStorage
}

// Function to change language
function changeLanguage(lang) {
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl'); // Right-to-Left for Arabic
        document.querySelector('h1').textContent = 'مرحبًا بك في صفحة الإعدادات';
        document.querySelector('p').textContent = 'تتيح لك هذه الصفحة تخصيص تجربتك.';
    } else {
        document.body.setAttribute('dir', 'ltr'); // Left-to-Right for English
        document.querySelector('h1').textContent = 'Welcome to the Settings Page';
        document.querySelector('p').textContent = 'This page allows you to customize your experience.';
    }
    localStorage.setItem('language', lang); // Save to LocalStorage
}

// Event Listeners
document.addEventListener('input', (e) => {
    if (e.target.id === 'backgroundColorPicker') {
        changeBackgroundColor(e.target.value);
    }
});

document.addEventListener('change', (e) => {
    if (e.target.id === 'languageSelector') {
        changeLanguage(e.target.value);
    }
});

// Initialize settings on page load
function loadSettings() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        changeBackgroundColor(savedColor);
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
}

document.addEventListener('DOMContentLoaded', loadSettings);