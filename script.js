
//cursor
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