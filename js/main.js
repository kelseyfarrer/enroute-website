/**
 * EN ROUTE STUDIO - Main JavaScript
 * Smooth scrolling, form handling, and interactive elements
 */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// All sections visible immediately - no scroll animations

// Form submission handling
const forms = document.querySelectorAll('form[data-netlify="true"]');
forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        // Netlify handles the submission, but we can add client-side validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e74c3c';
            } else {
                field.style.borderColor = '';
            }
        });

        if (!isValid) {
            e.preventDefault();
            showMessage(form, 'Please fill in all required fields.', 'error');
        }
    });

    // Clear error styling on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '';
        });
    });
});

// Show form messages
function showMessage(form, message, type) {
    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    form.appendChild(messageDiv);

    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add hover effect to project items
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'transform 0.3s ease';
        });
    });
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Images will load naturally, this just tracks visibility
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Handle newsletter form submission
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('form[name="newsletter"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            const emailInput = newsletterForm.querySelector('input[name="email"]');
            if (emailInput && !isValidEmail(emailInput.value)) {
                e.preventDefault();
                showMessage(newsletterForm, 'Please enter a valid email address.', 'error');
            }
        });
    }
});

// Mobile menu toggle (if added later)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    });
}

// Scroll to top on logo click
const logo = document.querySelector('.logo');
if (logo && logo.closest('a[href="index.html"]')) {
    logo.closest('a[href="index.html"]').addEventListener('click', (e) => {
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Add active state to current page in navigation (for future navigation menu)
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Console log for debugging (remove in production)
console.log('En Route Studio - Website loaded successfully');
