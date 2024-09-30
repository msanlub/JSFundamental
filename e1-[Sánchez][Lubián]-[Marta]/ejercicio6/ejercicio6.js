/*
Ejercicio 6: Operadores Ternarios
Escribe un script que pida al usuario un número y utilice el operador ternario para determinar si el número es positivo, negativo o cero. Muestra el resultado en un alert().
Objetivos:
Introducir el uso del operador ternario (condición ? expr1 : expr2).
*/

let numero;

do {
    let numeroPrompt = prompt("Indica un número: ");
    numero = Number(numeroPrompt);

} while ( isNaN(numero) );


const comprobacion = numero > 0 ? "positivo" : numero < 0 ? "negativo" : "cero";

alert(`El número ${numero} es ${comprobacion}.`);