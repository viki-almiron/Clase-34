//A qué generación pertenece
//Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const añoDeNacimiento = Number(prompt("Ingrese su año de nacimiento"));
const esBabyBoomer = 1949 <= añoDeNacimiento && añoDeNacimiento <= 1968;
const esGeneracionX = 1969 <= añoDeNacimiento && añoDeNacimiento <= 1980;
const esMillenial = 1981 <= añoDeNacimiento && añoDeNacimiento <= 1993;
const esCentennial = 1994 <= añoDeNacimiento && añoDeNacimiento <= 2010;

if (esBabyBoomer) {
    alert("Usted pertenece a la generción Baby boomer.");
}
else if (esGeneracionX) {
    alert("Usted pertenece a la generación X.");
}
else if (esMillenial) {
    alert("Usted pertenece a la generación Millenial.");
}
else if (esCentennial) {
    alert("Usted pertenece a la generación Centennial.");
}
else {
    alert("Usted no pertenece a ninguna de las siguien tenerciones: baby boomer, generacion X, millenial, centennial.");
}
