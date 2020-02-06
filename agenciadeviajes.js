//Agencia de viajes
//Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona (ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

let destinoElegido = "";
let precioFinal = 0; 
let personas = 0;
let dias = 0;
const miami = Number(150);
const buzios = Number(100);
const cordoba = Number(50);

alert(`Promos para este verano:
-Miami: US$150 por persona.
-Búzios: US$100 por persona.
-Córdoba: US$50 por persona.`);

destinoElegido = prompt("¿Que destino desea elegir?");
personas = prompt("Ingrese el número de personas que desean viajar");
dias = prompt("¿Cuantos días desea hospedarse?");

if (destinoElegido === "Miami") {
    precioFinal = dias * miami * personas;
}
if (destinoElegido === "Búzios") {
    precioFinal = dias * buzios * personas; 
}
if (destinoElegido === "Córdoba") {
    precioFinal = dias * cordoba * personas;
}

const quiereeditar = confirm(`Su precio final para viajar a ${destinoElegido} para ${personas} personas por ${dias} dias es: US$${precioFinal}.
¿Desea editar algún dato?`);

if (quiereeditar) {
    const datosaeditar = prompt("¿Que datos desea editar? (destino, personas o días)");
    if (datosaeditar === "destino") {
        destinoElegido = prompt("¿Que destino desea elegir?"); 
    }
    if (datosaeditar === "personas") {
        personas = prompt("Ingrese el número de personas que desean viajar");
    }
    if (datosaeditar === "días") {
        dias = prompt("¿Cuantos días desea hospedarse?");
    }
    if (destinoElegido === "Miami") {
        precioFinal = dias * miami * personas;
    }
    if (destinoElegido === "Búzios") {
        precioFinal = dias * buzios * personas; 
    }
    if (destinoElegido === "Córdoba") {
        precioFinal = dias * cordoba * personas;
    }
    alert(`Su precio final para viajar a ${destinoElegido} para ${personas} personas por ${dias} dias es: US$${precioFinal}.`);
}
