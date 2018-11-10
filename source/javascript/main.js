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

// slider
const slider = document.querySelector('#slider-speakers');
const sliderList = slider.querySelector('.speakers__list');
const cPrev = slider.querySelector('.speakers__contrl--prev');
const cNext = slider.querySelector('.speakers__contrl--next');
let indexActive = 0;
let step = 1;
let widthWindow = document.body.clientWidth;
window.addEventListener('resize', () => {
    widthWindow = document.body.clientWidth;
});
let handle;
function interval () {
  clearInterval(interval);
  handle = setInterval(function () {
    moveSlider('next');
  }, 2000);
}
function stop () {
  clearInterval(handle);
};
interval();

function moveSlider (e) {
    stop();
    let type = e;
    let itemWidth = sliderList.firstElementChild.offsetWidth + parseInt(getComputedStyle(sliderList.firstElementChild).marginRight) * 2

    type === 'next' ? indexActive += 1 : indexActive -= 1
    if  (widthWindow > 1284) {
        step = 3;
    }
    else if (widthWindow > 751) {
        step = 2;
    }
    else {
        step = 1;
    }
    if (indexActive < 0) indexActive = sliderList.children.length - step;
    if (indexActive > sliderList.children.length - step) indexActive = 0;
    sliderList.style.left = indexActive * (-itemWidth) + 'px';
    interval();
};
cPrev.addEventListener('click', () => moveSlider('prev'));
cNext.addEventListener('click', () => moveSlider('next'));
// const moveSlider = function (e) {
//   clearInterval(interval);
//   let type;
//   (e.target.closest('.speakers__contrl--prev')) ? type = 'prev' : type = 'next';
//
//   if (type === 'next') {
//     sliderList.appendChild(sliderList.firstElementChild)
//   }
//   if (type === 'prev') {
//     sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild)
//   }
//   //interval();
// };

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
            let header = document.querySelector(".header__content");
            let heightHeader = header.offsetHeight;

            window.scrollTo(0, r - heightHeader); //корректировка на высоту header, который имеет position:fixed;

            if (r !== w + t) {
                requestAnimationFrame(step);
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


// таймер обратного отсчета
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector(".days");
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      document.getElementById("clockdiv").className = "hidden";
      document.getElementById("clockdiv2").className = "hidden";
      document.getElementById("deadline-message").className = "visible";
      document.getElementById("deadline-message2").className = "visible";
      clearInterval(timeinterval);
      return true;
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

//var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
let deadline = "December 03 2018 00:00:00 GMT+0300";
//var deadline = new Date(Date.parse(new Date()) + 5 * 1000); // for endless timer
initializeClock("clockdiv", deadline);
initializeClock("clockdiv2", deadline);