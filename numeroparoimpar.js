//Número par o impar
//Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

const numero = prompt("Ingrese un número");

if (numero % 2 === 0) {
    alert('EL número ingresado es par');
}
else {
    alert('El número ingresado es impar');
}