/*
Ejercicio 14: Números Pares e Impares
Escribe un script en el que el usuario introduzca un número entero y muestre por pantalla una cadena de texto que indique si el número es par o impar.
Objetivos:
Practicar el uso de operadores de módulo y condicionales.
*/

let num;

do {
    num = prompt("Indica un número entero: ");
    num = +num; 
} while ( isNaN(num) || num < 0 || !Number.isInteger(num))

if (num % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}
