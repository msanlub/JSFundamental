/**
Ejercicio 9: Estructuras Condicionales Anidadas
Escribe un script que pida al usuario su edad y su nacionalidad. Si el usuario tiene 18 años o más y es de nacionalidad "española", mostrar un mensaje que diga "Puedes votar". En caso contrario, muestra un mensaje que indique que no puede votar.
Objetivos:
Practicar con condicionales anidados (if...else).
*/
console.log("EJERCICIO 9")

const NACIONALIDAD = "española";

const EDADUSUARIO = Number(prompt("Indique su edad: "));
const NACION = prompt("Indique su nacionalidad: ");

if (EDADUSUARIO >= 18){
    if ( NACION == NACIONALIDAD){
        alert("Sí puedes votar.")
    }
}else{
    alert("No puedes votar.")
}
console.log("------------------------------------------")