// hamburger
const burger = document.querySelector('#burger');
const nav = document.querySelector('.navigation');
burger.addEventListener('click', () => {
  burger.classList.toggle("active");
  nav.classList.toggle("open");
});