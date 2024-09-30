/*Ejercicio 20: Verificación de Palíndromos
Escribe un script que determine si una cadena de texto es un palíndromo, es decir, si se lee de la misma forma
 desde la izquierda y desde la derecha.
Ejemplo de palíndromo:
"La ruta nos aporto otro paso natural".
Objetivos:
Practicar el manejo de cadenas de texto.
Utilizar estructuras de control para verificar condiciones específicas.
*/

let frase = prompt("Indica un texto palíndromo: \n (ejemplo: 'La ruta nos aporto otro paso natural'");

let fraseSeparador = frase.toLowerCase().split(" ").join("");

let fraseInvertida = fraseSeparador.split("").reverse().join("");

if (fraseInvertida === fraseSeparador){
    console.log("Es palindromo.")
}else{
    console.log("No es palindromo.")
}

