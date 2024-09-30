/*Ejercicio 16: Documentación y Pruebas de Código
Toma uno de los ejercicios anteriores, añade comentarios explicando cada parte del código,
 y realiza pruebas en diferentes escenarios. Documenta en comentarios si el comportamiento es el esperado.
Objetivos:
Reforzar la importancia de los comentarios y las pruebas de código en la programación.
*/

alert("Ejercicio 16: mirar el código para comprobar los comentarios.")
//declaramos una variable sin asignarle valor
let num;

//creamos bucle mientras que sea true
do {
    //pedimos al usuario un numero entero 
    num = prompt("Indica un número entero: ");
    //convertimos el string del prompt en numero
    num = +num; 

} while ( isNaN(num) || num > 0 || !Number.isInteger(num)) //comprobamos que sea un numero, mayor que 0 y no sea decimal

//condicion para saber si el resto de el numero entre dos es cero sera numero par, de lo contrario sera impar
if (num % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}

/* Probamos la ejecución del con letras, decimales y signos para comprobar que funciona bien el programa.
Si funciona correctamente comprobamos si hace bien los pares e impares ingresando cualquier número.
*/