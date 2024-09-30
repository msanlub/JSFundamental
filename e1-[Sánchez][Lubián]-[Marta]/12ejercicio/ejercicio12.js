/**
 * Ejercicio 12: Bucle do...while
    Crea un bucle do...while que pida al usuario que introduzca una contraseña.
     El bucle seguirá ejecutándose hasta que el usuario introduzca la contraseña correcta ("1234"). 
     Si se introduce la contraseña correcta, muestra un mensaje de éxito.
    Objetivos:
    Introducir y practicar el bucle do...while.
 */

    let contraseña;
   do {
      contraseña = prompt("Introduzca la contraseña: ");
   }while (contraseña != "1234");

   alert("Contraseña correcta.")