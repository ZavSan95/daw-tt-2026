'use strict'

// 1. Variables y Operadores

// a. Crear dos variables numéricas y utilizar el operador suma
// para guardar el valor de la suma de ambos números en una 3er variable.
let num1 = 10;
let num2 = 5;
let suma = num1 + num2;

console.log('Ejercicio 1.a');
console.log('La suma es:', suma);

// b. Crear dos variables de tipo String y concatenarlas
// guardando el resultado en una 3er variable.
let texto1 = 'Hola';
let texto2 = 'Mundo';
let textoConcatenado = texto1 + ' ' + texto2;

console.log('Ejercicio 1.b');
console.log('Texto concatenado:', textoConcatenado);

let nombre = 'Santiago';
let apellido = 'Zavatti';

let otraFormaDeConcatenar = `${nombre} ${apellido}`;

console.log(otraFormaDeConcatenar);

// c. Crear dos variables de tipo String y sumar el largo de cada variable
// guardando el resultado de la suma en una 3er variable.
let palabra1 = 'JavaScript';
let palabra2 = 'Programacion';
let sumaLargos = palabra1.length + palabra2.length;

console.log('Ejercicio 1.c');
console.log('La suma de los largos es:', sumaLargos);
