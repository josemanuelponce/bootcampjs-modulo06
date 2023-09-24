import {} from './model';
import {} from './motor';
import {comprobarPlantarse, dameCarta, iniciarPartida, muestraPuntuacion, nuevaPartida, seguirPidiendo} from './ui';




document.addEventListener("DOMContentLoaded", () => {
    iniciarPartida();
});



// Boton para empezar una nueva partida
const nuevaPartidabtn = document.getElementById("nueva");
if (nuevaPartidabtn !== null && nuevaPartidabtn !== undefined && nuevaPartidabtn instanceof HTMLButtonElement) {
nuevaPartidabtn.addEventListener("click", nuevaPartida);
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);


// Boton para dar carta
const BotonCarta = document.getElementById("botonCarta");
if (BotonCarta !== null && BotonCarta !== undefined && BotonCarta instanceof HTMLButtonElement) {
BotonCarta.addEventListener("click",() => dameCarta());
}


// Boton para boton Me planto
const BotonPlantarse = document.getElementById("BotonPlantarse");
if(BotonPlantarse !== null && BotonPlantarse !== undefined && BotonPlantarse instanceof HTMLButtonElement){
BotonPlantarse.addEventListener("click", () => comprobarPlantarse());
}

// Boton para mostrar las cartas despues de plantarse para saber que habria pasado
const Seguir = document.getElementById("seguir");

if (Seguir !== null && Seguir !== undefined && Seguir instanceof HTMLButtonElement) {
Seguir.addEventListener("click",() => seguirPidiendo());
}