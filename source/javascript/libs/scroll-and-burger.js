module.exports = (function () {
    // hamburger
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('.header__navigation');
    const page = document.querySelector('#fullpage');

    burger.addEventListener('click', () => {
        burger.classList.toggle("active");
        nav.classList.toggle("open");
        page.classList.toggle("no-scroll");
    });

// scroll
    let links = document.querySelectorAll('[href^="#"]');
    let speed = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    let header = document.querySelector(".header__content");
    let heightHeader = header.offsetHeight;

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

            document.querySelector(hash).style.paddingTop = 0 + "px";
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start;
                let r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));

                window.scrollTo(0, r);

                if (r !== w + t) {
                    requestAnimationFrame(step);
                }
                else {

                    location.hash = hash;
                }
            }

            let sections = document.querySelectorAll("section");
            sections.forEach(item => {
                item.style.paddingTop = 0 + "px";
            });
            document.querySelector(hash).style.paddingTop = parseInt(document.querySelector(hash).style.paddingTop) + heightHeader + "px";
            sections[0].style.paddingTop = 0 + "px";
            sections[sections.length - 1].style.paddingTop = 0 + "px";
        })
    }
})();
