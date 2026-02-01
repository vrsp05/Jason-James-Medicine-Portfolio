// Mobile Menu Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger to X
      if (navMenu.classList.contains('active')) {
        hamburger.style.backgroundColor = 'transparent';
        hamburger.style.transform = 'rotate(45deg)';
        
        // Transform lines into X
        const beforeAfter = window.getComputedStyle(hamburger, '::before');
        hamburger.style.setProperty('--before-transform', 'rotate(90deg) translateX(8px)');
        hamburger.style.setProperty('--after-transform', 'rotate(90deg) translateX(-8px)');
      } else {
        hamburger.style.backgroundColor = '';
        hamburger.style.transform = '';
        hamburger.style.setProperty('--before-transform', '');
        hamburger.style.setProperty('--after-transform', '');
      }
    });
  }

  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 767) {
        navMenu.classList.remove('active');
        hamburger.style.backgroundColor = '';
        hamburger.style.transform = '';
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.style.backgroundColor = '';
      hamburger.style.transform = '';
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767) {
      navMenu.classList.remove('active');
      hamburger.style.backgroundColor = '';
      hamburger.style.transform = '';
    }
  });
});
