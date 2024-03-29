// таймер обратного отсчета
module.exports = deadline => {
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

    initializeClock("clockdiv", deadline);
    initializeClock("clockdiv2", deadline);
};