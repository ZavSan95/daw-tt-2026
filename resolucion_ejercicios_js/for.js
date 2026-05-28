'use strict'

// 5. For

// Esta función permite que el archivo funcione tanto en navegador como en Node.js.
// En navegador usa alert(). En Node.js usa console.log().
function mostrarMensaje(mensaje) {
    if (typeof alert === 'function') {
        alert(mensaje);
    } else {
        console.log(mensaje);
    }
}

// a. Crear un array que contenga 5 palabras y recorrerlo con for
// para mostrar una alerta utilizando cada palabra.
let palabras = ['perro', 'gato', 'casa', 'auto', 'libro'];

console.log('Ejercicio 5.a');

for (let i = 0; i < palabras.length; i++) {
    mostrarMensaje(palabras[i]);
}

// b. Convertir la primera letra de cada palabra en mayúscula
// y mostrar una alerta por cada palabra modificada.
console.log('Ejercicio 5.b');

for (let i = 0; i < palabras.length; i++) {
    let palabraModificada =
        palabras[i].substring(0, 1).toUpperCase() +
        palabras[i].substring(1).toLowerCase();

    mostrarMensaje(palabraModificada);
}

// c. Crear una variable sentence con un string vacío.
// Recorrer el array para ir guardando cada palabra dentro de sentence.
// Al final mostrar una única alerta con la cadena completa.
let sentence = '';

console.log('Ejercicio 5.c');

for (let i = 0; i < palabras.length; i++) {
    sentence = sentence + palabras[i] + ' ';
}

mostrarMensaje(sentence.trim());

// d. Crear un array vacío y con un bucle for de 10 repeticiones
// llenarlo con los números del 0 al 9.
let numeros = [];

console.log('Ejercicio 5.d');

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

console.log(numeros);
