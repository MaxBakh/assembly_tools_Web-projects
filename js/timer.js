const timerInput = document.getElementById("time"),
    timerShow = document.getElementById("timer");
var timeMinut;

export default function tikTac() {
    timeMinut = parseInt(timerInput.value) * 60;

    const timer = setInterval(function () {
        let seconds = timeMinut % 60;
        let minutes = timeMinut / 60 % 60;
        let hour = timeMinut / 60 / 60 % 60;

        if (timeMinut <= 0) {

            clearInterval(timer);

            timerShow.innerHTML = "Время закончилось";
        } else if (!timeMinut) {
            let strTimer = `Enter number`;

            timerShow.innerHTML = strTimer;
        } else {

            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;

            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000);
};