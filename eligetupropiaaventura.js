//Elige tu propia aventura
//Crear un programa que simule un juego de "Elige tu propia aventura". Debe describir un escenario y presentar opciones disponibles para actuar. Luego, a partir de la opción elegida, repetir el proceso hasta llegar a un final. El juego debe tener 1 escenario inicial con 3 opciones posibles, cada opción debe llevar a un nuevo escenario (distinto de los demás) con 3 opciones disponibles también. Estas opciones deben llevar a un final (por lo tanto hay 9 finales posibles).

let escenario2 = "";
let esenario3final = "";

const escenario1 = prompt(`¡Elegi tu propia aventura! Habia una vez dos gatitos: 
-que eran hermanos, 
-que eran amigos, 
-que eran novios`); 
const escenario1opcion1 = escenario1 === "que eran hermanos";
const escenario1opcion2 = escenario1 ===  "que eran amigos";
const escenario1opcion3 = escenario1 === "que eran novios";

if (escenario1opcion1) {
    const opcion1 = 'vivian en una casa';
    const opcion2 = 'vivian en un campo';
    const opcion3 = 'vivian en la selva';
    escenario2 = prompt(`Los gatitos hermanos: 
    -${opcion1},
    -${opcion2}, 
    -${opcion3}`);
    const escenario2opcion1 = escenario2 === opcion1;
    const escenario2opcion2 = escenario2 === opcion2;
    const escenario2opcion3 = escenario2 === opcion3;
    if (escenario2opcion1) {
        escenario3final = alert("Por siempre felices y contentos.");
    }
    if (escenario2opcion2) {
        escenario3final = alert("Libres, felices y contentos");
    }
    if (escenario2opcion3) {
        escenario3final = alert("Y se los comió un león"); 
    }
}

if (escenario1opcion2) {
    const opcion1 = 'jugaban basquet';
    const opcion2 = 'jugaban futbol';
    const opcion3 = 'jugaban tenis';
    escenario2 = prompt(`Los gatitos amigos: 
    -${opcion1},
    -${opcion2}, 
    -${opcion3}`); 
    const escenario2opcion1 = escenario2 === opcion1;
    const escenario2opcion2 = escenario2 === opcion2;
    const escenario2opcion3 = escenario2 === opcion3; 
    if (escenario2opcion1) {
        esenario3final = alert("Y ganaron todos los partidos.");
    }
    if (escenario2opcion2) {
        esenario3final = alert("Jugaron con Messi.");
    }
    if (escenario2opcion3) {
        esenario3final = alert("Perdieron porque no sé ni como se juega."); 
    }
}

if (escenario1opcion3) {
    const opcion1 = 'se casaron';
    const opcion2 = 'se fueron de viaje';
    const opcion3 = 'se separaron';
    escenario2 = prompt(`Los gatitos novios: 
    -${opcion1},
    -${opcion2}, 
    -${opcion3}`); 
    const escenario2opcion1 = escenario2 === opcion1;
    const escenario2opcion2 = escenario2 ===  opcion2;
    const escenario2opcion3 = escenario2 === opcion3;
    if (escenario2opcion1) {
        esenario3final = alert("Y tuvieron muchos gatitos.");
    }
    if (escenario2opcion2) {
        esenario3final = alert("Y comieron ratas por el mundo.");
    }
    if (escenario2opcion3) {
        esenario3final = alert("Y vivieron muy muy felices."); 
    }
}
