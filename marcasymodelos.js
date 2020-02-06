//Marcas y modelos
//Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. Una vez elegida la marca debe ofrecer elegir entre dos modelos distintos de la marca. Finalmente debe mostrar el producto elegido. Cada marca debe tener modelos distintos a los de otras marcas (no pueden tener el mismo nombre). P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.

let marca = '';
let modelo = '';
marca = prompt(`Elija una de las tres marcas disponibles:
-Philip,
-Sony,
-Samsung.`);

if (marca === "Philip") {
    modelo = prompt(`Elija uno de los seguientes modelos: 
    -Philip 3000,
    -Philip 5000`);
}
else if (marca === "Sony") {
    modelo = prompt(`Elija uno de los seguientes modelos: 
    -Sony XA,
    -Sony X100`);
}
else if (marca === "Samsung") {
    modelo = prompt(`Elija uno de los seguientes modelos: 
    -Samsung J7,
    -Samsung S10`);
}

alert(`Usted eligió el producto marca ${marca} y el modelo ${modelo}.`)
