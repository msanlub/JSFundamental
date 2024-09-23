/*
Ejercicio 5: Operadores Comparativos y Lógicos
Declara dos variables numéricas. Usa operadores de comparación (<, >, ==, !=) para comparar los valores y muestra los resultados en consola.
Utiliza operadores lógicos (&&, ||, !) para combinar condiciones y muestra los resultados en consola.
Objetivos:
Reforzar el uso de operadores de comparación y lógicos.
 */

console.log("EJERCICIO 5")

let primero = 14.9;
let segundo = 52

let result;

//mayor
result = primero > segundo;
console.log("14.9 > 52 = " + result)

//menor
result = primero < segundo;
console.log('14.9 < 52 = ' + result)

//igual
result = primero == segundo;
console.log("14.9 == 52 = " + result)

//desigual
result = primero != segundo;
console.log("14.9 != 52 = " + result)

//mayor o igual
result = primero > segundo || primero == segundo;
console.log("14.9 > 52 o 14.9 == 52 = " + result)

//menor e iguales
result = primero < segundo && primero != segundo;
console.log("14.9 < 52 y 14.9 != 52 = " + result)

//verifica que primero no es igual a segundo
result = !(primero == segundo);
console.log("¡14.9 NO es igual a 52! = " + result);

console.log("------------------------------------------")