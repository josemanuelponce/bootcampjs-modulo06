import {puntos} from './model';
import {calcularCarta, devolverMensajePlantarse, generarCarta, generarNumeroAleatorio, obtenerUrlCarta, sumarPuntos} from './motor';

// Funcion para bloquear botones
export const bloquearCartaDAR = (estaBloqueado: boolean) => {
    const bloquearCarta = document.getElementById("botonCarta");
    if(bloquearCarta !== null && bloquearCarta !== undefined && bloquearCarta instanceof HTMLButtonElement){
        bloquearCarta.disabled = estaBloqueado;
    }
};

// Funcion bloquear boton para seguir
export const bloquearCartaSeguir = (estaBloqueado: boolean) => {
    const bloquearCarta = document.getElementById("seguir");
    if(bloquearCarta !== null && bloquearCarta !== undefined && bloquearCarta instanceof HTMLButtonElement){
        bloquearCarta.disabled = estaBloqueado;
    }
};


// Funcion bloquear boton Me planto
export const bloquearCartaPlanto = (estaBloqueado: boolean) => {
    const bloquearCarta = document.getElementById("BotonPlantarse");
    if(bloquearCarta !== null && bloquearCarta !== undefined && bloquearCarta instanceof HTMLButtonElement){
        bloquearCarta.disabled = estaBloqueado;
    }
};

// Funcion para ganar o perder la partida
export const gestionarPartida = () => {
    if (puntos.puntuacion === 7.5){
        ganarPartida();
        bloquearCartaPlanto(true);
    }
    if (puntos.puntuacion > 7.5) {
        perderPartida();
        bloquearCartaPlanto(true);
    }
};

// Funcion para ganar partida
export const ganarPartida = () => {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    bloquearCartaDAR(true);
    bloquearCartaSeguir(true);
    
};

// Funcion para perder partida
export const perderPartida = () => {
    mostrarMensaje("Game Over");
    bloquearCartaDAR(true);
    bloquearCartaSeguir(true);
    
};

// Funcion para comprobar como te quedaste de cerca cuando le das a plantarse
export const comprobarPlantarse = () => {
    const mensaje = devolverMensajePlantarse();
    mostrarMensaje(mensaje);
    
    bloquearCartaDAR(true);
    bloquearCartaPlanto(true);
    bloquearCartaSeguir(false);
    gestionarPartida();
};




// Funcion para mostrar puntuacion y game over
export const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLDivElement) {
        elementoPuntuacion.innerHTML = `Tu puntuacion es ${puntos.puntuacion}`;
    }

};

// Funcion para mostrar la carta
export const mostrarCarta = (carta: number) => {
    const cartaImg= document.getElementById("cartaImg");
    if(cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement){
        const imagenUrl = obtenerUrlCarta(carta);
        cartaImg.src = imagenUrl;
    }
};



// Funcion para dar carta aleatoria y game over
export const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarCarta(numeroAleatorio);
    mostrarCarta(carta);
    const valor = calcularCarta(carta);
    sumarPuntos(valor);
    gestionarPartida();
    muestraPuntuacion();
};

export const iniciarPartida = () => {
    puntos.puntuacion = 0; 
    muestraPuntuacion();
    mostrarMensaje("");
    bloquearCartaSeguir(true);
};


// Funcion para mostrar un mensaje
export const mostrarMensaje = (mensaje: string) => {
    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
        elementoMensaje.innerHTML = mensaje;
    } else {
        console.error("No se ha encontrado el elemento");
    }

};

// Funcion para saber que habria pasado cuando te plantas
export const seguirPidiendo = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarCarta(numeroAleatorio);
    mostrarCarta(carta);
    const valor = calcularCarta(carta);
    sumarPuntos(valor);
    gestionarPartida();
    muestraPuntuacion();
    comprobarPlantarse();
    bloquearCartaSeguir(true);
    
};


// Funcion para nueva partida
export const nuevaPartida = () => {
    
    puntos.puntuacion = 0;
    muestraPuntuacion();
    mostrarMensaje("");
    bloquearCartaDAR(false);
    bloquearCartaSeguir(true);
    bloquearCartaPlanto(false);
    mostrarCarta(13);
};