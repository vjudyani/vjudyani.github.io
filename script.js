// ============================================
// Mobile Menu Toggle
// ============================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// ============================================
// Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Navigation Link
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================

const nav = document.getElementById('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ============================================
// Staggered Animation for Timeline Items
// ============================================

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// Dynamic Year in Footer
// ============================================

const footerText = document.querySelector('.footer-text');
if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Your Name. All rights reserved.`;
}

// ============================================
// Parallax Effect for Hero Section (Optional)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// ============================================
// Enhanced Hover Effects for Project Cards
// ============================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Console Easter Egg
// ============================================

console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio! Feel free to reach out if you want to collaborate.', 'font-size: 14px;');
console.log('%c💼 Let\'s build something amazing together!', 'font-size: 14px; color: #0066cc;');
