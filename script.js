let [Hours, Minutes, Seconds] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let playButton = document.querySelector(".i2");

function setTimer() {
    Seconds++;
    if (Seconds == 60) {
        Seconds = 0;
        Minutes++;

        if (Minutes == 60) {
            Minutes = 0;
            Hours++;
        }
    }

    let hourTime = Hours < 10 ? "0" + Hours : Hours;
    let minuteTime = Minutes < 10 ? "0" + Minutes : Minutes;
    let secondTime = Seconds < 10 ? "0" + Seconds : Seconds;

    displayTime.innerHTML = hourTime + ":" + minuteTime + ":" + secondTime;
}

function startTimer() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(setTimer, 1000);
    playButton.src= "images/pause.png";
}

function stopTimer() {
    clearInterval(timer);
 playButton.src= "images/start.png";
}

function resetTimer() {
    clearInterval(timer);
    [Hours, Minutes, Seconds] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    playButton.src= "images/start.png";
}





