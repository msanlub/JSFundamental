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
    
    sum = 0;

    if (!isNaN(number) && number.length >= 2 && Number.isInteger(Number(number))) {
        for (let i = 0; i < number.length; i++) {
            sum += parseInt(number[i]); 
        }
        alert(`La suma de los dígitos es: ${sum}`); 
    } else {
        alert("Por favor, introduce un número entero de mínimo dos dígitos.");
    }

}while (isNaN(number) || number.length < 2 || !Number.isInteger(number));

