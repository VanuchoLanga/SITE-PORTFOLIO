// ================================
// GSAP INITIALIZATION
// ================================

gsap.registerPlugin(ScrollTrigger);

// ================================
// NAVIGATION FUNCTIONALITY
// ================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav--scrolled');
    } else {
        navbar.classList.remove('nav--scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// BACK TO TOP BUTTON
// ================================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// GSAP ANIMATIONS
// ================================

// Hero parallax effect
gsap.to('.hero__image', {
    y: 100,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Fade in sections on scroll

const fadeInSections = ['.about', '.services', '.projects', '.contact'];

fadeInSections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Service cards stagger animation
gsap.from('.service-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.services__grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Project cards stagger animation
gsap.from('.project-card', {
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.projects__grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// About section animation
gsap.from('.about__image-wrapper', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.about__text', {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

// Social links hover animation
const socialLinks = document.querySelectorAll('.social__link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
});

// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn__text');
const btnLoader = submitBtn.querySelector('.btn__loader');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual EmailJS or formsubmit.co implementation)
    try {
        // OPTION 1: Using formsubmit.co
        // Uncomment and replace YOUR_EMAIL with your actual email
        /*
        const response = await fetch('https://formsubmit.co/silvanodejoaquimlanga@gmail.co', {
            method: 'POST',
            body: formData
        });
        */
        
        // OPTION 2: Using EmailJS
        // First, include EmailJS SDK in HTML: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        // Then initialize: emailjs.init('YOUR_PUBLIC_KEY');
        
        const response = await emailjs.send(
            'service_m8b5ogk',
            'template_2dp6l0h',
            {
                from_name: name,
                from_email: email,
                message: message
            }
        );
        
        // Simulate async operation (2 seconds delay)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success
        showMessage('success', 'Thank you! Your message has been sent successfully.');
        contactForm.reset();
        
    } catch (error) {
        // Error
        showMessage('error', 'Oops! Something went wrong. Please try again.');
    } finally {
        // Reset button state
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

function showMessage(type, text) {
    formMessage.textContent = text;
    formMessage.className = `form__message ${type} show`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove('show');
    }, 5000);
}

// ================================
// FORM INPUT ANIMATIONS
// ================================

const formInputs = document.querySelectorAll('.form__input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    input.addEventListener('blur', () => {
        gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ================================

// Uncomment to enable cursor trail effect

const cursor = document.createElement('div');
cursor.className = 'cursor-trail';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
    });
});
  
// ================================
// PROJECT CARD 3D TILT EFFECT
// ================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-card, .project-card, .about__image-wrapper, .about__text').forEach(el => {
    observer.observe(el);
});

// ================================
// TYPING EFFECT FOR HERO SUBTITLE (Optional)
// ================================


const heroSubtitle = document.querySelector('.hero__subtitle');
const subtitleText = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < subtitleText.length) {
        heroSubtitle.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing after hero animation
setTimeout(typeText, 1000);


// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ================================
// LOADING ANIMATION
// ================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements on load
    gsap.from('.hero__text', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero__image', {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
});

// ================================
// EMAIL JS CONFIGURATION
// ================================

/*
To use EmailJS:

1. Sign up at https://www.emailjs.com/
2. Create an email service
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Add EmailJS SDK to HTML:
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
6. Initialize EmailJS:
   emailjs.init('YOUR_PUBLIC_KEY');
7. Update the contact form submit handler above with your IDs
*/

// ================================
// FORMSUBMIT.CO CONFIGURATION
// ================================

/*
To use FormSubmit.co:

1. Update the form action in the contact form submit handler:
   const response = await fetch('https://formsubmit.co/YOUR_EMAIL', {
       method: 'POST',
       body: formData
   });

2. Replace YOUR_EMAIL with your actual email address
3. Optional: Add hidden inputs to customize:
   <input type="hidden" name="_subject" value="New Portfolio Contact!">
   <input type="hidden" name="_captcha" value="false">
   <input type="hidden" name="_template" value="table">
*/

console.log('Portfolio website loaded successfully! 🚀');
