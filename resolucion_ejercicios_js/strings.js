'use strict'

// 2. Strings

// a. Crear una variable de tipo string con al menos 10 caracteres
// y convertir todo el texto en mayúscula.
let textoMayuscula = 'javascript';
let textoEnMayuscula = textoMayuscula.toUpperCase();

console.log('Ejercicio 2.a');
console.log(textoEnMayuscula);

// b. Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con los primeros 5 caracteres.
let textoPrimerosCinco = 'Programacion';
let primerosCincoCaracteres = textoPrimerosCinco.substring(0, 5);

console.log('Ejercicio 2.b');
console.log(primerosCincoCaracteres);

// c. Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con los últimos 3 caracteres.
let textoUltimosTres = 'Desarrollo';
let ultimosTresCaracteres = textoUltimosTres.substring(textoUltimosTres.length - 3);

console.log('Ejercicio 2.c');
console.log(ultimosTresCaracteres);

// d. Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con la primera letra en mayúscula
// y las demás en minúscula.
let textoCapitalizar = 'jAVASCRIPT';
let textoCapitalizado =
    textoCapitalizar.substring(0, 1).toUpperCase() +
    textoCapitalizar.substring(1).toLowerCase();

console.log('Ejercicio 2.d');
console.log(textoCapitalizado);

// e. Crear una variable de tipo string con al menos 10 caracteres
// y algún espacio en blanco. Encontrar la posición del primer espacio.
let textoConEspacio = 'Curso JavaScript';
let posicionEspacio = textoConEspacio.indexOf(' ');

console.log('Ejercicio 2.e');
console.log('La posición del primer espacio es:', posicionEspacio);

// f. Crear una variable de tipo string con al menos 2 palabras largas.
// Generar un nuevo string que tenga la primera letra de ambas palabras
// en mayúscula y las demás letras en minúscula.
let dosPalabras = 'programacion javascript';

let posicionPrimerEspacio = dosPalabras.indexOf(' ');

let primeraPalabra = dosPalabras.substring(0, posicionPrimerEspacio);
let segundaPalabra = dosPalabras.substring(posicionPrimerEspacio + 1);

let primeraPalabraFormateada =
    primeraPalabra.substring(0, 1).toUpperCase() +
    primeraPalabra.substring(1).toLowerCase();

let segundaPalabraFormateada =
    segundaPalabra.substring(0, 1).toUpperCase() +
    segundaPalabra.substring(1).toLowerCase();

let palabrasFormateadas = primeraPalabraFormateada + ' ' + segundaPalabraFormateada;

console.log('Ejercicio 2.f');
console.log(palabrasFormateadas);
