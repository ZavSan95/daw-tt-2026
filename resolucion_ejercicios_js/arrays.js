'use strict'

// 3. Arrays

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

// a. Mostrar por consola los meses 5 y 11.
// Importante: si hablamos del mes 5 y 11 como posición humana,
// usamos índice 4 y 10 porque los arrays empiezan en 0.
console.log('Ejercicio 3.a');
console.log('Mes 5:', meses[4]);
console.log('Mes 11:', meses[10]);

// b. Ordenar el array de meses alfabéticamente.
let mesesOrdenados = meses.slice().sort();

console.log('Ejercicio 3.b');
console.log(mesesOrdenados);

// c. Agregar un elemento al principio y al final del array.
let mesesConAgregados = meses.slice();
mesesConAgregados.unshift('Inicio');
mesesConAgregados.push('Fin');

console.log('Ejercicio 3.c');
console.log(mesesConAgregados);

// d. Quitar un elemento del principio y del final del array.
mesesConAgregados.shift();
mesesConAgregados.pop();

console.log('Ejercicio 3.d');
console.log(mesesConAgregados);

// e. Invertir el orden del array.
let mesesInvertidos = meses.slice().reverse();

console.log('Ejercicio 3.e');
console.log(mesesInvertidos);

// f. Unir todos los elementos del array en un único string,
// donde cada mes esté separado por un guión.
let mesesUnidos = meses.join(' - ');

console.log('Ejercicio 3.f');
console.log(mesesUnidos);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre.
// Mayo está en índice 4 y Noviembre en índice 10.
// slice no incluye el último índice, por eso usamos 11.
let mesesMayoANoviembre = meses.slice(4, 11);

console.log('Ejercicio 3.g');
console.log(mesesMayoANoviembre);
