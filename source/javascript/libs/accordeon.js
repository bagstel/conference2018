// accordeon
module.exports = (function () {
    let current = 1;
    let stash;

    let toggle = function (e) {
        const columns = document.querySelectorAll('.column');
        const target = e.target.closest('.trigger');
        const control = target.dataset.control;

        switch (control) {
            case 'left' :
                stash = current <= 1 ? columns.length : current - 1;
                break;
            case 'right' :
                stash = current >= columns.length ? 1 : current + 1;
                break;
            default :
                stash = +control;
        }

        const currentItems = document.querySelectorAll(`.column-${current}`);
        const nextItems = document.querySelectorAll(`.column-${stash}`);

        current = stash;

        for (let i = 0; i < currentItems.length; i++) {
            currentItems[i].classList.remove('active');
        }
        for (let i = 0; i < nextItems.length; i++) {
            nextItems[i].classList.add('active');
        }
    };

    const trigger = document.querySelectorAll('.trigger');
    for (let i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener('click', toggle);
    }
})();