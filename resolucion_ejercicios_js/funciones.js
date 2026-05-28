'use strict'

// 6. Funciones

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
function sumaSimple(numero1, numero2) {
    return numero1 + numero2;
}

let resultadoSumaSimple = sumaSimple(10, 5);

console.log('Ejercicio 6.a');
console.log('Resultado suma simple:', resultadoSumaSimple);

// Esta función permite que el archivo funcione tanto en navegador como en Node.js.
// En navegador usa alert(). En Node.js usa console.log().
function mostrarMensaje(mensaje) {
    if (typeof alert === 'function') {
        alert(mensaje);
    } else {
        console.log(mensaje);
    }
}

// b. A la función suma anterior, agregarle una validación para controlar
// si alguno de los parámetros no es un número.
function sumaConValidacion(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        mostrarMensaje('Error: uno de los parámetros no es un número');
        return NaN;
    }

    return numero1 + numero2;
}

let resultadoSumaValidada = sumaConValidacion(20, 8);

console.log('Ejercicio 6.b');
console.log('Resultado suma validada:', resultadoSumaValidada);

// c. Crear una función validateInteger que reciba un número como parámetro
// y devuelva verdadero si es un número entero.
function validateInteger(numero) {
    return Number.isInteger(numero);
}

console.log('Ejercicio 6.c');
console.log('¿10 es entero?', validateInteger(10));
console.log('¿10.5 es entero?', validateInteger(10.5));

// d. A la función suma del ejercicio 6.b agregarle una llamada que valide
// que los números sean enteros. En caso de decimales, mostrar un alerta
// con el error y retornar el número convertido a entero redondeado.
function sumaConEnteros(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        mostrarMensaje('Error: uno de los parámetros no es un número');
        return NaN;
    }

    if (!validateInteger(numero1)) {
        mostrarMensaje('Error: el primer número no es entero. Se redondeará.');
        numero1 = Math.round(numero1);
    }

    if (!validateInteger(numero2)) {
        mostrarMensaje('Error: el segundo número no es entero. Se redondeará.');
        numero2 = Math.round(numero2);
    }

    return numero1 + numero2;
}

let resultadoSumaEnteros = sumaConEnteros(10.7, 5.2);

console.log('Ejercicio 6.d');
console.log('Resultado suma con enteros:', resultadoSumaEnteros);

// e. Convertir la validación del ejercicio 6.d en una función separada
// y llamarla dentro de la función suma.
function validarYRedondearEntero(numero, nombreParametro) {
    if (!validateInteger(numero)) {
        mostrarMensaje('Error: ' + nombreParametro + ' no es entero. Se redondeará.');
        return Math.round(numero);
    }

    return numero;
}

function sumaFinal(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        mostrarMensaje('Error: uno de los parámetros no es un número');
        return NaN;
    }

    numero1 = validarYRedondearEntero(numero1, 'numero1');
    numero2 = validarYRedondearEntero(numero2, 'numero2');

    return numero1 + numero2;
}

let resultadoSumaFinal = sumaFinal(12.4, 7.8);

console.log('Ejercicio 6.e');
console.log('Resultado suma final:', resultadoSumaFinal);
