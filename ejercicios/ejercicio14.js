/*
Ejercicio 14: Números Pares e Impares
Escribe un script en el que el usuario introduzca un número entero y muestre por pantalla una cadena de texto que indique si el número es par o impar.
Objetivos:
Practicar el uso de operadores de módulo y condicionales.
*/

let num;

while (true) {
    num = prompt("Indica un número entero: ");
    num = +num; 

    if (isNaN(num)) {
        alert("Debes indicar un número!!");
        continue;
    }

    if (num <= 0) {
        alert("El número tiene que ser entero!!");
        continue; 
    }

    if (num % 2 === 0) {
        alert("El número es par.");
        break;
    } else {
        alert("El número es impar.");
        break;
    }
}