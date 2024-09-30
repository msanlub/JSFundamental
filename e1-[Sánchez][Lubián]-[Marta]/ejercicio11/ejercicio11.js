/*
Ejercicio 11: Bucle while con Condición de Parada
Escribe un bucle while que pida al usuario un número entero y siga pidiendo números hasta que el usuario introduzca un número negativo.
Objetivos:
Practicar el uso de bucles con condición de parada.
*/
let num;

do {
    num = prompt("Indica un número (negativo para parar): ");
    num = +num;

} while (isNaN(num) || num >= 0)


