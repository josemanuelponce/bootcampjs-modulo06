import {puntos} from './model';

// Funcion para generar numero aleatorio y para no incluir el numero , 8, 9.
export const generarNumeroAleatorio = (): number => {
    return Math.floor(Math.random() * 10);
     
 }
 // Funcion para generar carta
 export const generarCarta = (numero: number): number => {
     if (numero === 0) {
         return 1;
     }
     return numero > 7 ? numero + 2 : numero
     
 };
 
 
 // Funcion para poner valor a cada carta
 export const calcularCarta = (valorCarta: number): number => {
     if (valorCarta > 7) {
         return 0.5
     }else{
         return valorCarta;
     }
 };

 export const sumarPuntos = (valor : number) => {
    puntos.puntuacion += valor;
};


// Funcion para ganar o perder la partida


export const devolverMensajePlantarse = () => {
    if (puntos.puntuacion <= 4 || puntos.puntuacion === 4.5) {
        return"Has sido muy conservador";
    } else if (puntos.puntuacion === 5 || puntos.puntuacion === 5.5) {
        return"Te ha entrado el canguelo eh?";
    } else if (puntos.puntuacion <= 6 || puntos.puntuacion === 6.5 || puntos.puntuacion === 7) {
        return"Casi casi...";
    } else if (puntos.puntuacion === 7.5) {
        return"¡Lo has clavado! ¡Enhorabuena!";
    }else {
        return"Game Over";
    }
    
};

// Funcion para mostrar carta
export const obtenerUrlCarta = (valorCarta: number): string => {
    
    
    switch (valorCarta) {
        case 1:
            return "/src/img/1_as-copas.jpg";
        case 2:
            return "/src/img/2_dos-copas.jpg";
        case 3:
            return "/src/img/3_tres-copas.jpg";
        case 4:
            return "/src/img/4_cuatro-copas.jpg";
        case 5:
            return "/src/img/5_cinco-copas.jpg";
        case 6:
            return "/src/img/6_seis-copas.jpg";
        case 7:
            return "/src/img/7_siete-copas.jpg";
        case 10:
            return "/src/img/10_sota-copas.jpg";
        case 11:
            return "/src/img/11_caballo-copas.jpg";
        case 12:
            return "/src/img/12_rey-copas.jpg";
        default:
            return "/src/img/back.jpg";
    
}
};


