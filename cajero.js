//Cajero
//Crear un programa que muestre el dinero inicial, y que permita retirar dinero hasta 3 veces preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.

let dineroDisponible = 5000;
let retiro1 = 0;
let retiro2 = 0;
let retiro3 = 0;

retiro1 = Number(prompt(`Usted tiene $${dineroDisponible}, ingrese el monto que desea retirar`));

if  (dineroDisponible >= retiro1) {
    dineroDisponible -= retiro1;
    retiro2 = prompt(`Retiro con exito. Su dinero disponible ahora es de $${dineroDisponible}. Ingrese un nuevo monton a retirar`);
}
else {
    retiro2 = prompt (`Su dinero disponible es menor al monto ingresado. Por favor ingrese nuevo monto`);
}

if  (dineroDisponible >= retiro2) {
    dineroDisponible -= retiro2;
    retiro3 = prompt(`Retiro con exito. Su dinero disponible ahora es de $${dineroDisponible}. Ingrese un nuevo monto a retirar`);
}
else {
    retiro3 = prompt (`Su dinero disponible es menor al monto ingresado. Por favor ingrese nuevo monto`);
}

if (dineroDisponible >= retiro3) {
    dineroDisponible -= retiro3;
    alert(`Usted ha alcanzado el máximo de extracciones permitidas. Su saldo actual es de $${dineroDisponible}.`);
}
