import {puntos} from './model';
import {calcularCarta, devolverMensajePlantarse, generarCarta, generarNumeroAleatorio, obtenerUrlCarta, sumarPuntos} from './motor';



// Funcion para bloquear botones
const bloquearCartaDAR = (estaBloqueado: boolean) => {
    const bloquearCarta = document.getElementById("botonCarta");
    if(bloquearCarta !== null && bloquearCarta !== undefined && bloquearCarta instanceof HTMLButtonElement){
        bloquearCarta.disabled = estaBloqueado;
    }
};

// Funcion bloquear boton para seguir
const bloquearCartaSeguir = (estaBloqueado: boolean) => {
    const bloquearCarta = document.getElementById("seguir");
    if(bloquearCarta !== null && bloquearCarta !== undefined && bloquearCarta instanceof HTMLButtonElement){
        bloquearCarta.disabled = estaBloqueado;
    }
};

bloquearCartaSeguir(true);

// Funcion bloquear boton Me planto
const bloquearCartaPlanto = (estaBloqueado: boolean) => {
    const bloquearCarta = document.getElementById("BotonPlantarse");
    if(bloquearCarta !== null && bloquearCarta !== undefined && bloquearCarta instanceof HTMLButtonElement){
        bloquearCarta.disabled = estaBloqueado;
    }
};


// Funcion para ganar o perder la partida
const gestionarPartida = () => {
    if (puntos.puntuacion === 7.5){
        ganarPartida();
    }
    if (puntos.puntuacion > 7.5) {
        perderPartida();
    }
};

// Funcion para ganar partida
const ganarPartida = () => {
    if (puntos.puntuacion === 7.5){
        mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
        bloquearCartaDAR(true);
        bloquearCartaSeguir(true);
    }
};

// Funcion para perder partida
const perderPartida = () => {
    if (puntos.puntuacion > 7.5) {
        mostrarMensaje("Game Over");
        bloquearCartaDAR(true);
        bloquearCartaSeguir(true);
    }
};


// Funcion para comprobar como te quedaste de cerca cuando le das a plantarse
const comprobarPlantarse = () => {
    const mensaje = devolverMensajePlantarse();
    mostrarMensaje(mensaje);
    
    bloquearCartaDAR(true);
    bloquearCartaPlanto(true);
    bloquearCartaSeguir(false);
    gestionarPartida();
};



// Funcion para mostrar puntuacion y game over
const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLDivElement) {
        elementoPuntuacion.innerHTML = `Tu puntuacion es ${puntos.puntuacion}`;
    }

};



// Funcion para mostrar la carta
const mostrarCarta = (carta: number) => {
    const cartaImg= document.getElementById("cartaImg");
    if(cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement){
        const imagenUrl = obtenerUrlCarta(carta);
        cartaImg.src = imagenUrl;
    }
};



// Funcion para dar carta aleatoria y game over
const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarCarta(numeroAleatorio);
    mostrarCarta(carta);
    const valor = calcularCarta(numeroAleatorio);
    sumarPuntos(valor);
    gestionarPartida();
    muestraPuntuacion();
};

document.addEventListener("DOMContentLoaded", () => {
    puntos.puntuacion = 0; 
    muestraPuntuacion();
    mostrarMensaje("");
});





// Funcion para mostrar un mensaje
const mostrarMensaje = (mensaje: string) => {
    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
        elementoMensaje.innerHTML = mensaje;
    } else {
        console.error("No se ha encontrado el elemento");
    }

};

// Funcion para saber que habria pasado cuando te plantas
const seguirPidiendo = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarCarta(numeroAleatorio);
    mostrarCarta(carta);
    const valor = calcularCarta(numeroAleatorio);
    sumarPuntos(valor);
    gestionarPartida();
    muestraPuntuacion();
    comprobarPlantarse();
    
};


// Funcion para nueva partida
const nuevaPartida = () => {
    
    puntos.puntuacion = 0;
    muestraPuntuacion();
    mostrarMensaje("");
    bloquearCartaDAR(false);
    bloquearCartaSeguir(true);
    bloquearCartaPlanto(false);
    mostrarCarta(13);
};


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