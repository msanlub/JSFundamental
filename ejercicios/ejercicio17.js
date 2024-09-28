/*Ejercicio 17: Bucle con Condicionales
Crea un bucle que pida al usuario su edad 5 veces y calcule cuántas veces el usuario ha introducido 
un valor mayor o igual a 18.
Objetivos:
Practicar la interacción entre bucles y condicionales.
*/
let age;
let contador = 0;

for (i=0; i<5; i++){
    age = prompt("Indique su edad: ");
    age = +age;
    
    if (isNaN(age)){
        alert("Debe indicar sólo números!!");
        continue;
    }
    if (age >= 18){
        contador++;
    }
}

console.log(contador);