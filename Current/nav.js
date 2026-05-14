// nav.js — shared mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks   = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    navLinks.addEventListener('click', () => {
        if (window.innerWidth <= 768) navLinks.classList.remove('active');
    });
}
