const burger = ducument.querySelector('.burger');
const nav = document.querySelector('.header');

burger.addEventListener('click', () => {
    nav.classList.toggle('navbar-active');
});