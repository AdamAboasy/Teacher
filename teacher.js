// Change text and background color when the settings button is clicked
document.getElementById('settingsButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('mainHeading').textContent = 'Hello! This text has been changed using JavaScript.';
    document.body.style.backgroundColor = '#0056b3'; // Change background color
});

// Change text color on hover over the description
document.getElementById('description').addEventListener('mouseover', function() {
    this.style.color = '#ffcc00'; // Change text color on hover
});

document.getElementById('description').addEventListener('mouseout', function() {
    this.style.color = 'white'; // Restore original text color
});

// Show/hide description when the toggle button is clicked
document.getElementById('toggleButton').addEventListener('click', function() {
    var description = document.getElementById('description');
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        this.textContent = 'Hide Description';
    } else {
        description.classList.add('hidden');
        this.textContent = 'Show Description';
    }
});