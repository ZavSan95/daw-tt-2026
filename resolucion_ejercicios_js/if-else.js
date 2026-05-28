'use strict'

// 4. If Else

// Esta función permite que el archivo funcione tanto en navegador como en Node.js.
// En navegador usa alert(). En Node.js usa console.log().
function mostrarMensaje(mensaje) {
    if (typeof alert === 'function') {
        alert(mensaje);
    } else {
        console.log(mensaje);
    }
}

// a. Crear un número aleatorio entre 0 y 1.
// Si es mayor o igual que 0,5 mostrar “Greater than 0,5”,
// sino mostrar “Lower than 0,5”.
let numeroAleatorio = Math.random();

console.log('Ejercicio 4.a');
console.log('Número aleatorio:', numeroAleatorio);

if (numeroAleatorio >= 0.5) {
    mostrarMensaje('Greater than 0,5');
} else {
    mostrarMensaje('Lower than 0,5');
}

// b. Crear una variable Age con un número entero entre 0 y 100
// y mostrar el mensaje correspondiente.
let age = 30;

console.log('Ejercicio 4.b');
console.log('Edad:', age);

if (age < 2) {
    mostrarMensaje('Bebe');
} else if (age >= 2 && age <= 12) {
    mostrarMensaje('Niño');
} else if (age >= 13 && age <= 19) {
    mostrarMensaje('Adolescente');
} else if (age >= 20 && age <= 30) {
    mostrarMensaje('Joven');
} else if (age >= 31 && age <= 60) {
    mostrarMensaje('Adulto');
} else if (age >= 61 && age <= 75) {
    mostrarMensaje('Adulto mayor');
} else {
    mostrarMensaje('Anciano');
}
