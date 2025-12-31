document.addEventListener('DOMContentLoaded', function() {
    // Check if particles container exists
    if(document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#379634" }, /* Your Primary Color */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#379634",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4, /* Speed of movement */
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }, /* Mouse grab effect */
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});

const cursorGlow = document.querySelector('.cursor-glow');
const cursorDot = document.querySelector('.cursor-dot')
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
})

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
     
      
const themeToggle = document.getElementById('theme-icon');
const root = document.documentElement;


if (root.classList.contains('light-mode')) {
  themeToggle.classList.remove('bxs-sun');
  themeToggle.classList.add('bxs-moon');
} else {
  themeToggle.classList.remove('bxs-moon');
  themeToggle.classList.add('bxs-sun');
}

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light-mode');
  
  if(root.classList.contains('light-mode')) {
    themeToggle.classList.remove('bxs-sun');
    themeToggle.classList.add('bxs-moon');
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.classList.remove('bxs-moon');
    themeToggle.classList.add('bxs-sun');
    localStorage.setItem('theme', 'dark');
  }
});


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

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
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
          formMessage.textContent = 'Thank you! Your message has been sent successfully.';
          formMessage.className = 'form-message success';
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formMessage.textContent = 'Oops! There was a problem sending your message. Please try again or contact me directly.';
        formMessage.className = 'form-message error';
        console.error('Form submission error:', error);
      } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        loadingSpinner.style.display = 'none';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});