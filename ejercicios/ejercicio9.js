/**
Ejercicio 9: Estructuras Condicionales Anidadas
Escribe un script que pida al usuario su edad y su nacionalidad. Si el usuario tiene 18 años o más y es de nacionalidad "española", mostrar un mensaje que diga "Puedes votar". En caso contrario, muestra un mensaje que indique que no puede votar.
Objetivos:
Practicar con condicionales anidados (if...else).
*/
console.log("EJERCICIO 9")

const nacionalidad = "española";

const edadUsuario = Number(prompt("Indique su edad: "));
const nacion = prompt("Indique su nacionalidad: ");

if (edadUsuario >= 18 && nacion == nacionalidad){
    alert("Sí puedes votar.")
}else{
    alert("No puedes votar.")
}
console.log("------------------------------------------")