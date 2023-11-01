function startTimer(minutes) {
    let seconds = 0;
    let display = document.getElementById("timer");

    const interval = setInterval(function() {
        display.textContent = formatTime(minutes) + ":" + formatTime(seconds);
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            alert("Tempo encerrado!");
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
