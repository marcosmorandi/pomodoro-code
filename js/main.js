const milissegundosPomodoro = 4000
const milissegundosIntervalo = 5000
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
let milissegundosRestantes = 0
let contador

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    if(disparador.textContent=="Pausar") {
        clearInterval(contador)
        disparador.textContent="Retomar"
    }   else {
        if(disparador.textContent=="Começar") {
            milissegundosRestantes = milissegundosPomodoro - 1000

        }   else if(disparador.textContent=="Intervalo") {
            milissegundosRestantes = milissegundosIntervalo - 1000
        }

        disparador.textContent="Pausar"
        contador = setInterval('contadorDeSegundos()', 1000);
    }

})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        cronometro.textContent = "00:00"
        console.log("O seu tempo de produção do pomodoro acabou. Vá descansar!")

        if (disparador.textContent=="Começar"){
            disparador.textContent = "Intervalo"
            document.querySelector('body').style.background = "#287b7e"
            disparador.style.color = "#287b7e"
        } else {
            disparador.textContent="Começar"
            document.querySelector('body').style.background = "#C84949"
            disparador.style.color = "#C84949"
        }


        clearInterval(contador)
    } else {
        cronometro.textContent = formatadorDoTempo(milissegundosRestantes/1000);
    }

    milissegundosRestantes -= 1000;
}

function formatadorDoTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return (minutos.toString().padStart(2, '0')+":"+segundos.toString().padStart(2, '0'))
}




// Ao dar o play eu tenho que trocar o texto do botão - ok
// Se o botão for clicado e o texto for "pausar" eu tenho que interromper o contador mas...
//salvar a quantidade de segundos que restam.
// Trocar o texto para "retonar".
// Quando retornar retomar o contador.