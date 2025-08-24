/**
 * BU Data Science Association Website
 * Main JavaScript functionality
 */

/* ================================ */
/* CONSTANTS & CONFIGURATION        */
/* ================================ */

/* Google Sheets Integration */
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwH5Gq7nZsudcZfnDjWTU_wW1ttTXZDJqRsQRK622XxqHvg4Wak3jReGdV09pEdbz4X/exec';

/* All CSS selectors used throughout the app */
const SELECTORS = {
    mobileMenuBtn: '.mobile-menu-btn',
    navMenu: '.nav-menu',
    filterButtons: '.filter-btn',
    eventCards: '.event-card',
    joinForm: '.join-form',
    navLinks: 'a[href^="#"]',
    formInputs: 'input, select, textarea',
    heroLogoImage: '.hero-logo-image',
    interactiveButtons: '.btn-primary, .btn-secondary, .join-btn, .filter-btn, .social-btn, .theme-toggle-btn',
    animatableSections: '.about, .events, .projects, .team, .join',
    cards: '.about-card, .event-card, .project-card, .team-card',
    formGroups: '.form-group',
    themeToggleBtn: '.theme-toggle-btn'
};

/* Animation timings and settings */
const ANIMATION_CONFIG = {
    observerOptions: {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    },
    cardStaggerDelay: 200,
    formGroupStaggerDelay: 250,
    cardAnimationDuration: '0.8s',
    formAnimationDuration: '0.7s',
    rippleAnimationDuration: 600,
    parallaxRate: -0.5,
    navbarOffset: 80
};

/* Default animation states */
const INITIAL_ANIMATION_STATE = {
    opacity: '0',
    cardTransform: 'translateY(30px)',
    formTransform: 'translateY(20px)'
};

/* ================================ */
/* INITIALIZATION                   */
/* ================================ */

document.addEventListener('DOMContentLoaded', function() {
    /* Initialize all features when page loads */
    initMobileMenu();
    initEventFiltering();
    initFormHandling();
    initScrollAnimations();
    initInteractiveEffects();
    initSmoothScrolling();
    initParallaxEffects();
    initFormFocusEffects();
    initThemeToggle();
});

/* ================================ */
/* MOBILE NAVIGATION                */
/* ================================ */

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector(SELECTORS.mobileMenuBtn);
    const navMenu = document.querySelector(SELECTORS.navMenu);
    
    if (mobileMenuBtn && navMenu) {
        /* Toggle mobile menu visibility */
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function closeMobileMenuIfOpen() {
    const navMenu = document.querySelector(SELECTORS.navMenu);
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

/* ================================ */
/* EVENT FILTERING                  */
/* ================================ */

function initEventFiltering() {
    const filterButtons = document.querySelectorAll(SELECTORS.filterButtons);
    const eventCards = document.querySelectorAll(SELECTORS.eventCards);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            /* Update active button state */
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            /* Filter and animate event cards */
            eventCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    showEventCard(card);
                } else {
                    hideEventCard(card);
                }
            });
        });
    });
}

function showEventCard(card) {
    card.style.display = 'block';
    /* Re-trigger animation for filtered cards */
    card.style.animation = 'none';
    card.offsetHeight; // Force reflow
    card.style.animation = 'fadeInUp 0.6s ease forwards';
}

function hideEventCard(card) {
    card.style.display = 'none';
}

/* ================================ */
/* FORM HANDLING                    */
/* ================================ */

function initFormHandling() {
    const joinForm = document.querySelector(SELECTORS.joinForm);
    
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const formObject = {};
    
    /* Convert FormData to object */
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    /* Validate required fields */
    if (!formObject.fullName || !formObject.email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    /* Add timestamp */
    formObject.timestamp = new Date().toISOString();
    
    /* Show loading state */
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    /* Send to Google Sheets */
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject)
    })
    .then(response => {
        /* Success - even with no-cors we can't read response */
        alert('Thank you for your interest! We\'ll be in touch soon.');
        form.reset();
    })
    .catch(error => {
        /* Handle errors gracefully */
        console.error('Submission error:', error);
        alert('Thank you for your interest! We\'ll be in touch soon.');
        form.reset();
    })
    .finally(() => {
        /* Reset button state */
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

function initFormFocusEffects() {
    const formInputs = document.querySelectorAll(SELECTORS.formInputs);
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

/* ================================ */
/* SCROLL ANIMATIONS                */
/* ================================ */

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                animateSection(element);
                /* Stop observing after animation for performance */
                observer.unobserve(element);
            }
        });
    }, ANIMATION_CONFIG.observerOptions);
    
    /* Watch all main sections for scroll animations */
    const sections = document.querySelectorAll(SELECTORS.animatableSections);
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
}

function animateSection(section) {
    section.classList.add('animate');
    
    /* Animate cards with stagger effect */
    animateCards(section);
    
    /* Animate form elements */
    animateFormGroups(section);
}

function animateCards(section) {
    const cards = section.querySelectorAll(SELECTORS.cards);
    
    cards.forEach((card, index) => {
        card.style.opacity = INITIAL_ANIMATION_STATE.opacity;
        card.style.transform = INITIAL_ANIMATION_STATE.cardTransform;
        
        setTimeout(() => {
            card.style.transition = `all ${ANIMATION_CONFIG.cardAnimationDuration} ease`;
            card.style.opacity = '1';
            card.style.transform = '';  // Remove inline transform to allow CSS hover to work
        }, index * ANIMATION_CONFIG.cardStaggerDelay);
    });
}

function animateFormGroups(section) {
    const formGroups = section.querySelectorAll(SELECTORS.formGroups);
    
    formGroups.forEach((group, index) => {
        group.style.opacity = INITIAL_ANIMATION_STATE.opacity;
        group.style.transform = INITIAL_ANIMATION_STATE.formTransform;
        
        setTimeout(() => {
            group.style.transition = `all ${ANIMATION_CONFIG.formAnimationDuration} ease`;
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * ANIMATION_CONFIG.formGroupStaggerDelay);
    });
}

/* ================================ */
/* INTERACTIVE EFFECTS              */
/* ================================ */

function initInteractiveEffects() {
    const buttons = document.querySelectorAll(SELECTORS.interactiveButtons);
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    // Set ripple properties
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add to element and remove after animation
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, ANIMATION_CONFIG.rippleAnimationDuration);
}

/* ================================ */
/* SMOOTH SCROLLING                 */
/* ================================ */

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll(SELECTORS.navLinks);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleSmoothScroll(this);
        });
    });
}

function handleSmoothScroll(link) {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - ANIMATION_CONFIG.navbarOffset;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenuIfOpen();
    }
}

/* ================================ */
/* PARALLAX EFFECTS                 */
/* ================================ */

function initParallaxEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(handleParallaxScroll);
            ticking = true;
        }
    });
}

function handleParallaxScroll() {
    const scrolled = window.pageYOffset;
    const heroLogo = document.querySelector(SELECTORS.heroLogoImage);
    
    // Apply subtle parallax to hero logo
    if (heroLogo && scrolled < window.innerHeight) {
        const rate = scrolled * ANIMATION_CONFIG.parallaxRate;
        heroLogo.style.transform = `translateY(${rate}px)`;
    }
    
    ticking = false;
}

/* ================================ */
/* THEME TOGGLE                     */
/* ================================ */

function initThemeToggle() {
    const themeToggleBtn = document.querySelector(SELECTORS.themeToggleBtn);
    
    if (themeToggleBtn) {
        /* Load saved theme or default */
        loadSavedTheme();
        
        /* Add click event listener */
        themeToggleBtn.addEventListener('click', function() {
            toggleTheme();
        });
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'red' ? null : 'red';
    
    /* Apply new theme */
    if (newTheme) {
        document.documentElement.setAttribute('data-theme', newTheme);
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    /* Save to localStorage */
    saveThemePreference(newTheme || 'default');
    
    /* Update button icon */
    updateThemeToggleIcon(newTheme);
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme-preference');
    
    if (savedTheme && savedTheme === 'red') {
        document.documentElement.setAttribute('data-theme', 'red');
        updateThemeToggleIcon('red');
    } else {
        updateThemeToggleIcon('default');
    }
}

function saveThemePreference(theme) {
    localStorage.setItem('theme-preference', theme);
}

function updateThemeToggleIcon(theme) {
    const themeToggleBtn = document.querySelector(SELECTORS.themeToggleBtn);
    
    if (themeToggleBtn) {
        /* Update button icon based on current theme */
        if (theme === 'red') {
            themeToggleBtn.textContent = '🔴'; /* Red theme active */
        } else {
            themeToggleBtn.textContent = '🟣'; /* Default theme active */
        }
    }
}