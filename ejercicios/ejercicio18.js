/*Ejercicio 18: Sumar Dígitos
Escribe un script que pida al usuario un número entero de varios dígitos y sume todos los dígitos del número.
 Muestra el resultado en un alert().
Objetivos:
Practicar la manipulación de números y el uso de bucles.
*/

let sum;
let number;

do {
    number = prompt("Indica un número entero de mínimo dos dígitos: ");

}while (isNaN(number) || number.length < 2 || number.includes('.'));

sum = 0;

for(i = 0; i < number.length ; i++){
    sum += parseInt(number[i]);
}

console.log("La suma es = "+ sum)
