// JavaScript for mobile navigation toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// Add event listener to the toggle button
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        // Toggle the 'active' class to show/hide and apply styles defined in CSS
        navLinks.classList.toggle("active");
    });
}

// Close mobile nav when a link is clicked
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navigation is currently visible (has 'active' class)
            if (navLinks.classList.contains('active')) {
                // Hide the navigation
                navLinks.classList.remove('active');
            }
        });
    });
}

// Set current year in footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}
