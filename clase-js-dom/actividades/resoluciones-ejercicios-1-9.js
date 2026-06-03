// ======================================================
// Resoluciones de ejercicios 1 a 9
// Clase: JavaScript - DOM
// ======================================================

// IMPORTANTE:
// Este archivo contiene las soluciones de los ejercicios propuestos.
// Para probarlos, se recomienda crear un HTML con los elementos indicados
// en cada ejercicio o copiar cada bloque en el archivo script.js correspondiente.

// ======================================================
// Ejercicio 1: seleccionar y modificar un título
// HTML esperado:
// <h1 id="titulo">Título original</h1>
// ======================================================

const titulo = document.querySelector("#titulo");

if (titulo) {
    titulo.textContent = "Clase de DOM con JavaScript";
}

// ======================================================
// Ejercicio 2: cambiar el color de un párrafo
// HTML esperado:
// <p class="descripcion">Este texto cambiará de color.</p>
// ======================================================

const descripcion = document.querySelector(".descripcion");

if (descripcion) {
    descripcion.style.color = "red";
    descripcion.style.fontSize = "20px";
}

// ======================================================
// Ejercicio 3: botón que cambia contenido
// HTML esperado:
// <p id="noticia">Noticia inicial</p>
// <button id="btnCambiarNoticia">Cambiar noticia</button>
// ======================================================

const noticia = document.querySelector("#noticia");
const btnCambiarNoticia = document.querySelector("#btnCambiarNoticia");

if (noticia && btnCambiarNoticia) {
    btnCambiarNoticia.addEventListener("click", function () {
        noticia.textContent = "Nueva noticia: JavaScript permite modificar el contenido de una página web.";
    });
}

// ======================================================
// Ejercicio 4: agregar una clase CSS
// HTML esperado:
// <div id="caja">Caja de ejemplo</div>
// <button id="btnActivar">Activar caja</button>
//
// CSS esperado:
// .activa {
//     background-color: lightgreen;
//     border: 2px solid green;
// }
// ======================================================

const caja = document.querySelector("#caja");
const btnActivar = document.querySelector("#btnActivar");

if (caja && btnActivar) {
    btnActivar.addEventListener("click", function () {
        caja.classList.add("activa");
    });
}

// ======================================================
// Ejercicio 5: mostrar y ocultar un mensaje
// HTML esperado:
// <button id="btnMostrarMensaje">Mostrar mensaje</button>
// <p id="mensaje" class="oculto">Este es un mensaje oculto.</p>
//
// CSS esperado:
// .oculto {
//     display: none;
// }
// ======================================================

const btnMostrarMensaje = document.querySelector("#btnMostrarMensaje");
const mensaje = document.querySelector("#mensaje");

if (btnMostrarMensaje && mensaje) {
    btnMostrarMensaje.addEventListener("click", function () {
        mensaje.classList.toggle("oculto");
    });
}

// ======================================================
// Ejercicio 6: leer el valor de un input
// HTML esperado:
// <input type="text" id="nombreInput" placeholder="Ingrese su nombre">
// <button id="btnSaludar">Saludar</button>
// ======================================================

const nombreInput = document.querySelector("#nombreInput");
const btnSaludar = document.querySelector("#btnSaludar");

if (nombreInput && btnSaludar) {
    btnSaludar.addEventListener("click", function () {
        alert("Hola, " + nombreInput.value);
    });
}

// ======================================================
// Ejercicio 7: validar campo vacío
// HTML esperado:
// <input type="text" id="nombreValidar">
// <p id="errorNombreValidar"></p>
// ======================================================

const nombreValidar = document.querySelector("#nombreValidar");
const errorNombreValidar = document.querySelector("#errorNombreValidar");

if (nombreValidar && errorNombreValidar) {
    nombreValidar.addEventListener("blur", function () {
        if (nombreValidar.value.trim() === "") {
            errorNombreValidar.textContent = "El nombre es obligatorio.";
            errorNombreValidar.style.color = "red";
        }
    });

    nombreValidar.addEventListener("focus", function () {
        errorNombreValidar.textContent = "";
    });
}

// ======================================================
// Ejercicio 8: validar edad
// HTML esperado:
// <input type="number" id="edadInput">
// <p id="errorEdad"></p>
// ======================================================

const edadInput = document.querySelector("#edadInput");
const errorEdad = document.querySelector("#errorEdad");

if (edadInput && errorEdad) {
    edadInput.addEventListener("blur", function () {
        const edad = Number(edadInput.value);

        if (edadInput.value.trim() === "" || edad < 18) {
            errorEdad.textContent = "Debes ser mayor de edad.";
            errorEdad.style.color = "red";
        }
    });

    edadInput.addEventListener("focus", function () {
        errorEdad.textContent = "";
    });
}

// ======================================================
// Ejercicio 9: validar email
// HTML esperado:
// <input type="text" id="emailInput">
// <p id="errorEmail"></p>
// ======================================================

const emailInput = document.querySelector("#emailInput");
const errorEmailEjercicio = document.querySelector("#errorEmail");

if (emailInput && errorEmailEjercicio) {
    emailInput.addEventListener("blur", function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value.trim())) {
            errorEmailEjercicio.textContent = "Ingrese un email válido.";
            errorEmailEjercicio.style.color = "red";
        }
    });

    emailInput.addEventListener("focus", function () {
        errorEmailEjercicio.textContent = "";
    });
}
