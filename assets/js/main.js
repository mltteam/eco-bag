// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');
    const navLinkElements = document.querySelectorAll('.nav-link');

    if (menuToggle && navLinks && menuIcon) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');

            // Toggle icon
            if (navLinks.classList.contains('open')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking on a nav link
    if (navLinks && menuIcon) {
        navLinkElements.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }
});

// Image Slider Auto-slide
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.about-image-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Only initialize slider if elements exist
    if (totalSlides === 0) {
        console.warn('Slider elements not found');
        return;
    }

    console.log('Slider initialized with', totalSlides, 'slides');

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        if (totalSlides > 0) {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
    }

    // Initialize first slide
    showSlide(0);

    // Auto-slide every 1.5 seconds
    let slideInterval = setInterval(nextSlide, 1500);

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);

            // Reset the interval when user manually changes slide
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 1500);
        });
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.faq-toggle');

            // Toggle the answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                if (toggle) toggle.textContent = '+';
            } else {
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.display = 'none';
                });
                document.querySelectorAll('.faq-toggle').forEach(tog => {
                    tog.textContent = '+';
                });

                // Open clicked FAQ
                answer.style.display = 'block';
                if (toggle) toggle.textContent = '−';
            }
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Show success message (you can customize this)
            alert('Thank you for your interest! We will get back to you soon.');

            // Reset form
            contactForm.reset();

            // Here you would typically send the data to a server
            // Example:
            // fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ name, email, message })
            // });
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
