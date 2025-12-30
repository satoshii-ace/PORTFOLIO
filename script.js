
//cursor
const cursorGlow = document.querySelector('.cursor-glow');
const cursorDot = document.querySelector('.cursor-dot')
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
})

//burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header')
burger.addEventListener('click', () => {
  nav.classList.toggle('navbar-active');
})

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('navbar-active');
  });
});
     
      
//light & dark mode
const themeToggle = document.getElementById('theme-icon');
const root = document.documentElement;


if (root.classList.contains('light-mode')) {
  themeToggle.classList.remove('bxs-moon');
  themeToggle.classList.add('bxs-sun');
}

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light-mode');
  
  if(root.classList.contains('light-mode')) {
    themeToggle.classList.remove('bxs-moon');
    themeToggle.classList.add('bxs-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.classList.remove('bxs-sun');
    themeToggle.classList.add('bxs-moon');
    localStorage.setItem('theme', 'dark');
  }
});


//hover hero section
const heroImg = document.querySelector('.hero img');
const originalSrc = 'assets/hero1.png';
const hoverSrc = 'assets/hero2.png';

document.querySelector('.hero').addEventListener('mouseenter', () => {
  heroImg.src = hoverSrc;
});

document.querySelector('.hero').addEventListener('mouseleave', () => {
  heroImg.src = originalSrc;
});


const aboutImg = document.querySelector('.about-img img');
const origSrc = 'assets/about.png';
const hovSrc = 'assets/about2.png';

document.querySelector('.about-img').addEventListener('mouseenter', () => {
  aboutImg.src = hovSrc;
});

document.querySelector('.about-img').addEventListener('mouseleave', () => {
  aboutImg.src = origSrc;
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      loadingSpinner.style.display = 'block';
      formMessage.textContent = '';
      formMessage.className = 'form-message';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success
          formMessage.textContent = 'Thank you! Your message has been sent successfully.';
          formMessage.className = 'form-message success';
          contactForm.reset();
        } else {
          // Error
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Error handling
        formMessage.textContent = 'Oops! There was a problem sending your message. Please try again or contact me directly.';
        formMessage.className = 'form-message error';
        console.error('Form submission error:', error);
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        loadingSpinner.style.display = 'none';
      }
    });
  }
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
      }
    });
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});