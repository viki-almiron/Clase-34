//Cambio de contraseña
//Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.

alert("Para cambiar su contraseña debe responder las siguientes tres preguntas de seguridad");

const pregunta1 = prompt("¿Cuál es el nombre de tu mascota?");
const pregunta2 = prompt("¿Cuál es el nombre de tu mejor amiga");
const pregunta3 = prompt("¿Cuál es tu pelicula favorita?");

if (pregunta1 === "asuka" && pregunta2 === "emilce" && pregunta3 === "volver al futuro") {
    prompt("Ingrese su nueva contraseña");
    alert("Su contraseña fue cambiada");
}
if (pregunta1 != "asuka") {
    alert("Nombre de tu mascota incorrecto"); 
}
if (pregunta2 != "emilce") {
    alert("Nombre de tu mejor amiga incorrecto");
}
if (pregunta3 != "volver al futuro") {
    alert("Nombre de tu pelicula favorito incorrecto");
}
