//Sandwich
//Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. Debe preguntar:
//Tipo de pan: blanco, negro, integral
//Ingrediente 1: tomate, lechuga, pimiento
//Ingrediente 2: cebolla, aceituna, pepino
//Aderezos: mostaza, mayonesa, picante
//Gaseosa: Coca Cola, Pepsi, Sprite

let combo = '';

const pan = prompt("Elija un tipo de pan (blanco, negro o integral).");
const eligepan = pan === 'blanco'|| pan === 'negro' || pan === 'integral';
if (eligepan) {
    if (pan === 'blanco') {
        combo += '\n-Pan: blanco\n';
    }
    if (pan === 'negro') {
        combo += '\n-Pan: negro\n'
    }
    if (pan === 'integral') {
        combo += '\n-Pan: integral\n';
    }
}else {
    alert("Opción invalida su pedido saldra incompleto"); 
}

const ingrediente1 = prompt("Elija un ingrediente (tomate, lechuga o pimiento");
const eligeingrediente1 = ingrediente1 === 'tomate' || ingrediente1 === 'lechuga' || ingrediente1 === 'pimiento';
if (eligeingrediente1) {
    if (ingrediente1 === 'tomate') {
        combo += '\n-Tomate\n';
    }
    if (ingrediente1 === 'lechuga') {
        combo += '\n-Lechuga\n'
    }
    if (ingrediente1 === 'pimiento') {
        combo += '\n-Pimineto\n';
    }
}
else {
    alert("Opción invalida su pedido saldra incompleto") 
}

const ingrediente2 = prompt("Elija el segundo ingrediente (cebolla, aceituna, pepino)");
const eligeingrediente2 = ingrediente2 === 'cebolla' ||ingrediente2 === 'aceituna' ||ingrediente2 === 'pepino'; 
if (eligeingrediente2) {
    if (ingrediente2 === 'cebolla') {
        combo += '\n-Cebolla\n';
    }
    if (ingrediente2 === 'aceituna') {
        combo += '\n-Aceituna\n'
    }
    if (ingrediente2 === 'pepino') {
        combo += '\n-Pepino\n';
    }
}
else {
    alert("Opción invalida su pedido saldra incompleto"); 
}

const aderezos = prompt("Elija su aderezo (mostaza, mayonesa, picante)");
const eligeaderezos = aderezos === 'mostaza' ||aderezos === 'mayonesa' ||aderezos === 'picante';
if (eligeaderezos) {
    if (aderezos === 'mostaza') {
        combo += '\n-Monstaza\n';
    }
    if (aderezos === 'mayonesa') {
        combo += '\n-Mayonesa\n'
    }
    if (aderezos === 'picante') {
        combo += '\n-Picante\n';
    }
}
else {
    alert("Opción invalida su pedido saldra incompleto"); 
}

const gaseosa = prompt ("Elija su gaseosa (coca cola, pepsi, sprite)"); 
const eligegaseosa = gaseosa === 'coca cola' || gaseosa === 'pepsi'||gaseosa === 'sprite'; 
if (eligegaseosa) {
    if (gaseosa === 'coca cola') {
        combo += '\n-Coca cola\n';
    }
    if (gaseosa === 'pepsi') {
        combo += '\n-Pepsi\n'
    }
    if (gaseosa === 'sprite') {
        combo += '\n-Sprite\n';
    }
}
else {
    alert("Opción invalida su pedido saldra incompleto"); 
}

alert(`Su combo será: ${combo}`);
