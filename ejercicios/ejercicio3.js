/*
Ejercicio 3: Operadores y Asignaciones
Declara dos variables numéricas. Usa los operadores aritméticos básicos (+, -, *, /) y muestra los resultados en consola.
Utiliza un operador de incremento y uno de decremento en las variables, mostrando el resultado en consola.
Objetivos:
Practicar el uso de operadores aritméticos y asignaciones compuestas.
Familiarizarse con el incremento y decremento de valores.
*/

console.log("EJERCICIO 3")

let numeroUno = 3;
let numeroDos = 9;

let resultado;

//suma
resultado = numeroUno + numeroDos
console.log("3 + 9 = " + resultado)

//incremento
console.log("Incremento de resultado de suma = " + ++resultado)

//resta
resultado = numeroUno - numeroDos
console.log("3 - 9 = " + resultado)

//multiplicación
resultado = numeroUno * numeroDos
console.log("3 x 9 = " + resultado)

//división
resultado = numeroDos / numeroUno
console.log("9 / 3 = " + resultado)


//decremento
console.log("Decremento de resultado de división = " + --resultado)


console.log("------------------------------------------")