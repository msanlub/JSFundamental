/*
Ejercicio 4: Conversión de Tipos Implícita
Declara una variable de tipo cadena que contenga un número, por ejemplo "123", y otra de tipo número. Suma ambas variables y observa el resultado en la consola. Explica lo que ha sucedido en un comentario.
Objetivos:
Comprender la conversión de tipos implícita en JavaScript.
*/

console.log("EJERCICIO 4")

let numero1 = "123"
let numero2 = 5

let suma = numero1 + numero2
console.log(suma)

/*
1235  -> los resultados se concatenan ambod como cadenas de String, el Int lo convierte a String
*/
console.log("------------------------------------------")