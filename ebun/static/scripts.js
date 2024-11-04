const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// Toggle menu on hamburger click
hamburger.addEventListener('click', (event) => {
    const isActive = navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
    body.classList.toggle('no-scroll');

    // Update aria attributes
    hamburger.setAttribute('aria-expanded', isActive);
    navLinks.setAttribute('aria-hidden', !isActive);

    // Prevent event from bubbling up to the document
    event.stopPropagation();
});

// Close the menu when clicking anywhere on the screen
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        body.classList.remove('no-scroll');

        // Update aria attributes
        hamburger.setAttribute('aria-expanded', false);
        navLinks.setAttribute('aria-hidden', true);
    }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        body.classList.remove('no-scroll');
        
        // Update aria attributes
        hamburger.setAttribute('aria-expanded', false);
        navLinks.setAttribute('aria-hidden', true);
    }
});


// for read more text 
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreText = this.nextElementSibling;
            moreText.style.display = moreText.style.display === 'block' ? 'none' : 'block';
            this.textContent = this.textContent === 'Read More' ? 'Read Less' : 'Read More';
        });
    });
});
