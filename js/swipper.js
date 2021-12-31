export default function swipper() {

    let data = document.getElementById('datecalc'),
        tmr = document.getElementById('timerDiv');


    if (data.style.display == "block" && tmr.style.display === "none") {
        data.style.display = "none";
        tmr.style.display = "block";
    } else {
        data.style.display = "block";
        tmr.style.display = "none";
    }
}