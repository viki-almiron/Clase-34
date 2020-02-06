//Recetas
//Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 ingredientes. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5). Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.

let comidas = "";

const tieneHarina = confirm(`¿Tiene harina?`);
const tieneHuevos = confirm(`¿Tiene huevos?`);
const tieneManteca = confirm(`¿Tiene manteca?`);
const tieneQueso = confirm(`¿Tiene queso?`);
const tieneLeche = confirm(`¿Tiene leche?`);

const omelette = tieneHuevos && tieneQueso;
const lecheEspesada = tieneHarina && tieneLeche;
const bizcochuelo = tieneHarina && tieneHuevos && tieneLeche;
const galletitasDeQueso = tieneHarina && tieneHuevos && tieneQueso;
const tortaDeManteca = tieneHarina && tieneHuevos && tieneLeche && tieneManteca;
const pizzaFortificadaConLeche = tieneHarina && tieneHuevos && tieneLeche && tieneQueso;
const chipa = tieneHarina && tieneHuevos && tieneManteca && tieneQueso && tieneLeche;

if (chipa) {
    comidas += '\nChipa\n';
}
if (pizzaFortificadaConLeche) {
    comidas += '\nPizza fortificada con leche\n';
}
if (tortaDeManteca) {
    comidas += '\nTorta de manteca\n';
}
if (galletitasDeQueso) {
    comidas += '\nGalletitas de queso\n';
}
if (bizcochuelo) {
    comidas += '\nBizcochuelo\n';
}
if (lecheEspesada) {
    comidas += '\nLeche espesada\n';
}
if (omelette) {
    comidas += '\nOmelette\n'; 
}
if (comidas) {
    alert(`Usted puede cocinar:
    ${comidas}`);
}
else {
    alert("No hay ninguna comida para hacer con sus ingredientes");
}
