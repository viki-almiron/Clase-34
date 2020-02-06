//Heladería II
//Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
//1/4kg: 2 sabores.
//1/2kg: 3 sabores.
//3/4kg: 4 sabores.
//1kg: 5 sabores.
//Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al finalizar un mensaje con la cantidad de kg y los gustos escogidos.

const kilosDeHelado = prompt("¿Cuantos kilos de helado va a comprar? Usted puede elegir entre: 1/4kg, 1/2kg, 3/4kg, 1kg.")
let sabor1 = ""
let sabor2 = ""
let sabor3 = ""
let sabor4 = ""
let sabor5 = ""

if (kilosDeHelado === "1/4kg") {
    alert("Usted tiene 2 sabores para elegir");
    sabor1 = prompt("Ingrese el primer sabor");
    sabor2 = prompt("Ingrese el segundo sabor");
}
else if (kilosDeHelado === "1/2kg") {
    alert("Usted tiene 3 sabores para elergir");
    sabor1 = prompt("Ingrese el primer sabor");
    sabor2 = prompt("Ingrese el segundo sabor");
    sabor3 = prompt("Ingrese el tercer sabor");
}
else if (kilosDeHelado === "3/4kg") {
    alert("Usted tiene 4 sabores para elegir");
    sabor1 = prompt("Ingrese el primer sabor");
    sabor2 = prompt("Ingrese el segundo sabor");
    sabor3 = prompt("Ingrese el tercer sabor");
    sabor4 = prompt("Ingrese el cuarto sabor");
}
else if (kilosDeHelado === "1kg") {
    alert("Usted tiene 5 sabores para elegir");
    sabor1 = prompt("Ingrese el primer sabor");
    sabor2 = prompt("Ingrese el segundo sabor");
    sabor3 = prompt("Ingrese el tercer sabor");
    sabor4 = prompt("Ingrese el cuarto sabor");
    sabor5 = prompt("Ingrese el quinto sabor"); 
}

alert(`Usted compró ${kilosDeHelado}. Los sabores elegidos son:
${sabor1} 
${sabor2}
${sabor3} 
${sabor4} 
${sabor5}`);
