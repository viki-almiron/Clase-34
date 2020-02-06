//Días del mes
//Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

const mes = prompt("Ingrese un mes");

const meses29 = mes==="febrero";
const meses30 = mes==="noviembre" || mes==="abril" || mes==="junio"|| mes=="septiembre";
const meses31 =  mes==="enero"|| mes==="marzo" || mes==="mayo" || mes==="julio" || mes==="agosto" || mes==="octubre" || mes==="diciembre";

if (meses29) {
   alert(`${mes} tiene 29 días.`);
}
else if (meses30) {
    alert(`${mes} tiene 30 días.`);
}
else if (meses31) {
    alert(`${mes} tiene 31 días.`);
}
else {
    alert("Su ingreso no es valido");
}

