// hamburger
const burger = document.querySelector('#burger');
const nav = document.querySelector('.navigation');
const page = document.querySelector('#fullpage');
burger.addEventListener('click', () => {
  burger.classList.toggle("active");
  nav.classList.toggle("open");
  page.classList.toggle("no-scroll");
});