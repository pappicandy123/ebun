const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const body = document.body;

hamburger.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
    body.classList.toggle('no-scroll');

    // Update aria attributes
    hamburger.setAttribute('aria-expanded', isActive);
    navLinks.setAttribute('aria-hidden', !isActive);
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
