/*
Ejercicio 7: Modificación de Script Avanzada
Modifica el script del ejercicio 2 para que:
El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y aparezca en un pop-up.
El mensaje mostrado incluya:
Un salto de línea.
Comillas simples y comillas dobles.

Objetivos:
Gestionar correctamente las cadenas de texto, incluyendo caracteres especiales.
*/

console.log("EJERCICIO 7")
console.log("Acordarse de activar las ventanas emergentes para esta url, gracias!")

let mensaje = "Qué fácil es incluir 'comillas simples' y \n" + '"comillas dobles".';

// Abrimos una ventana emergente (popup) con las dimensiones especificadas
let popup = window.open('file:///home/marta/DAW2/CLIENTE/JSFundamental/index.html', 'popup', 'width=400,height=200');

// Escribimos el mensaje en la nueva ventana
popup.document.write("<p>" + mensaje + "</p>");

setTimeout(function() {
    popup.close();
  }, 5000); // Cierra el pop-up después de 5 segundos (5000 milisegundos)

console.log("------------------------------------------")