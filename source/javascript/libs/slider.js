// slider
module.exports = (function () {
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

    function interval() {
        clearInterval(interval);
        handle = setInterval(function () {
            moveSlider('next');
        }, 2000);
    }

    function stop() {
        clearInterval(handle);
    }
    interval();

    function moveSlider(e) {
        stop();
        let type = e;
        let itemWidth = sliderList.firstElementChild.offsetWidth + parseInt(getComputedStyle(sliderList.firstElementChild).marginRight) * 2

        type === 'next' ? indexActive += 1 : indexActive -= 1;
        if (widthWindow > 1284) {
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
    }

    cPrev.addEventListener('click', () => moveSlider('prev'));
    cNext.addEventListener('click', () => moveSlider('next'));
})();