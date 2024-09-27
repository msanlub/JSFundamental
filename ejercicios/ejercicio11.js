/*
Ejercicio 11: Bucle while con Condición de Parada
Escribe un bucle while que pida al usuario un número entero y siga pidiendo números hasta que el usuario introduzca un número negativo.
Objetivos:
Practicar el uso de bucles con condición de parada.
*/
let num;

while (true) {
    num = prompt("Indica un número (negativo para parar): ");

    num = Number(num);

    if (isNaN(num)) {
        alert("Tienes que indicar un número válido!!");
        continue;
    }
    if (num < 0) {
        break;
    }
}

