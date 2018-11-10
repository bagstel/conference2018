// polyfill for "closest"
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        let el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
    };
}

// hamburger
const burger = document.querySelector('#burger');
const nav = document.querySelector('.header__navigation');
const page = document.querySelector('#fullpage');

burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    nav.classList.toggle("open");
    page.classList.toggle("no-scroll");
});

// // slider
const slider = document.querySelector('#slider-speakers');
const sliderList = slider.querySelector('.speakers__list');

const cPrev = slider.querySelector('.speakers__contrl--prev');
const cNext = slider.querySelector('.speakers__contrl--next');

const moveSlider = function (e) {
    let type;
    (e.target.closest('.speakers__contrl--prev')) ? type = 'prev' : type = 'next';

    if (type === 'next') {
        sliderList.appendChild(sliderList.firstElementChild)
    }
    if (type === 'prev') {
        sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild)
    }
};
cPrev.addEventListener('click', moveSlider);
cNext.addEventListener('click', moveSlider);


// scroll
let links = document.querySelectorAll('[href^="#"]');
let speed = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

for (let n = 0; n < links.length; n++) {

    links[n].addEventListener('click', function (e) {

        e.preventDefault();

        burger.classList.remove("active");
        nav.classList.remove("open");
        page.classList.remove("no-scroll");

        let w = window.pageYOffset;
        let hash = this.href.replace(/[^#]*(.*)/, '$1');
        let t = document.querySelector(hash).getBoundingClientRect().top;
        let start = null;

        requestAnimationFrame(step);

        function step(time) {
            if (start === null) {
                start = time;
            }

            let progress = time - start;
            let r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));

            window.scrollTo(0, r);

            if (r !== w + t) {
                requestAnimationFrame(step)
            }
            else {
                location.hash = hash;
            }
        }
    });
}


//program
// const program = document.querySelector('.program__list');
// const items = program.querySelectorAll('.program__item');
//
// let toggle = function (e) {
//     let target = e.target;
//     let trigger = target.closest('.program__trigger');
//     let active = target.closest('.program__item');
//     if (!trigger) return;
//     // if (active.classList.contains('program__item--active')) {
//     //     active.classList.remove('program__item--active');
//     // } else {
//         items.forEach(item => {
//             item.classList.remove('program__item--active');
//         });
//         active.classList.add('program__item--active');
//     // }
// };
//
// program.addEventListener('click', toggle);


const program = document.querySelectorAll('.trigger');

let toggle = function (e) {

    let target = e.target.closest('.trigger');
    let column = target.dataset.column;

    const items = document.querySelectorAll(`.column-${column}`);
    const list = document.querySelectorAll('.column');

    console.log(list[0].children[0].dataset.column === column);
    for (let i = 0; i < list.length; i++) {

        if (list[i].children[0].dataset.column === column) {
            list[i].classList.add('active');
        }
        else {
            list[i].classList.remove('active');
        }
    }
};

for (let i = 0; i < program.length; i++) {
    program[i].addEventListener('click', toggle);
}
