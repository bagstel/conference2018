// slider
module.exports = (function () {
    const slider = document.querySelector('.carousel');
    const sliderList = slider.querySelector('.carousel__list');
    const cPrev = slider.querySelector('.control--prev');
    const cNext = slider.querySelector('.control--next');
    let widthWindow = document.body.clientWidth;
    let indexActive = 0;
    let step = 1;
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
        let itemWidth = 388;

        type === 'next' ? indexActive += 1 : indexActive -= 1;

        if (widthWindow <= 1250) {
            step = 2;
        }
        else if (widthWindow <= 900) {
            step = 1;
        } else {
            step = 3;
        }


        if (indexActive < 0) indexActive = sliderList.children.length - step;
        if (indexActive > sliderList.children.length - step) {
            indexActive = 0;
        }

        sliderList.style.marginLeft = indexActive * (-itemWidth) + 'px';

        interval();
    }

    cPrev.addEventListener('click', () => moveSlider('prev'));
    cNext.addEventListener('click', () => moveSlider('next'));
})();