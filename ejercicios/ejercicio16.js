/*Ejercicio 16: Documentación y Pruebas de Código
Toma uno de los ejercicios anteriores, añade comentarios explicando cada parte del código,
 y realiza pruebas en diferentes escenarios. Documenta en comentarios si el comportamiento es el esperado.
Objetivos:
Reforzar la importancia de los comentarios y las pruebas de código en la programación.
*/

alert("Ejercicio 16: mirar el código para comprobar los comentarios.")
//declaramos una variable sin asignarle valor
let num;

//creamos bucle mientras que sea true
while (true) {
    //pedimos al usuario un numero entero, probamos con numeros y signos para comprobar que funciona bien el programa
    num = prompt("Indica un número entero: ");
    //convertimos el string del prompt en numero
    num = +num; 

    //condicional que si no es numero le muestra un mensaje al usuario y sigue ejecutando la siguiente condicion,sino se cortaria el programa
    if (isNaN(num)) {
        alert("Debes indicar un número!!");
        continue;
    }

    //segunda condicion para que el numero sea entero, no puede ser menor o igual que cero. Avisamos al usuario
    if (num <= 0) {
        alert("El número tiene que ser entero!!");
        continue; 
    }

    //tercera condicion para saber si el resto de el numero entre dos es cero sera numero par, de lo contrario sera impar
    if (num % 2 === 0) {
        alert("El número es par.");
        break;
    } else {
        alert("El número es impar.");
        break;
    }
}