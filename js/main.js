const segundosPomodoro = 4000 // Estamos usando 4 segundos para testes.
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.");

    // Criando o cronometro.
    setTimeout(() => {
        console.log ("Acabou o pomodoro!");
        alert("O seu tempo de produção do pomodoro acabou. Vá descansar!");

        clearInterval(contador);
    }, segundosPomodoro);

    let contador = setInterval('contadorDeSegundos()',1000);
})

function contadorDeSegundos() {
    console.log('tick');
}