/*
Ejercicio 6: Operadores Ternarios
Escribe un script que pida al usuario un número y utilice el operador ternario para determinar si el número es positivo, negativo o cero. Muestra el resultado en un alert().
Objetivos:
Introducir el uso del operador ternario (condición ? expr1 : expr2).
*/

const numeroPrompt = Number(prompt("Indica un número: "));

const comprobacion = numeroPrompt > 0 ? "positivo" : numeroPrompt < 0 ? "negativo" : "cero";

alert(`El número ${numeroPrompt} es ${comprobacion}.`);