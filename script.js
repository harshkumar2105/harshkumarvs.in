// ========== SUPER SIMPLE WORKING SCRIPT ==========

// Hide loader after 2 seconds - GUARANTEED TO WORK
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Loader hidden');
        } else {
            console.log('Loader not found');
        }
    }, 2000);
});

// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init();
}

// Mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});