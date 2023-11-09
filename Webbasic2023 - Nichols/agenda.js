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
//-----------------------------------------------------------------
let cronometroInterval;
let segundos = 0;
let minutos = 0;

const cronometroElement = document.getElementById("cronometro");
const iniciarButton = document.getElementById("iniciar");
const pausarButton = document.getElementById("pausar");
const reiniciarButton = document.getElementById("reiniciar");

iniciarButton.addEventListener("click", function() {
  iniciarCronometro();
  iniciarButton.disabled = true;
  pausarButton.disabled = false;
});

pausarButton.addEventListener("click", function() {
  pausarCronometro();
  iniciarButton.disabled = false;
  pausarButton.disabled = true;
});

reiniciarButton.addEventListener("click", function() {
  reiniciarCronometro();
  iniciarButton.disabled = false;
  pausarButton.disabled = true;
});

function iniciarCronometro() {
  cronometroInterval = setInterval(function() {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    atualizarCronometro();
  }, 1000);
}

function pausarCronometro() {
  clearInterval(cronometroInterval);
}

function reiniciarCronometro() {
  pausarCronometro();
  segundos = 0;
  minutos = 0;
  atualizarCronometro();
}

function atualizarCronometro() {
  const minutosStr = minutos < 10 ? "0" + minutos : minutos;
  const segundosStr = segundos < 10 ? "0" + segundos : segundos;
  cronometroElement.innerText = minutosStr + ":" + segundosStr;
}
