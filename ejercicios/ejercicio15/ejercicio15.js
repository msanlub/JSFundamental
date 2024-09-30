/*Ejercicio 15: Completa las Condiciones en los if
Completa las condiciones de los if en el siguiente script para que los mensajes de los alert() 
se muestren de forma correcta:

Objetivos:
Comprender el uso de condiciones dentro de bucles y estructuras de control.*/

var numero1 = 5;
var numero2 = 8;

if (!(numero1 > numero2)){
    alert(numero1+" no es mayor que " +numero2)
}

if (numero2 >= 0){
    alert(numero2 + " es positivo.")
}

if (numero1 < 0){
    alert(numero1 + "es negativo o distinto a cero.")
}

if (!(numero1++ >= numero2)){
    alert("Incrementar en 1 unidad el valor de " + numero1 + ", no lo hace mayor o igual que " + numero2)
}