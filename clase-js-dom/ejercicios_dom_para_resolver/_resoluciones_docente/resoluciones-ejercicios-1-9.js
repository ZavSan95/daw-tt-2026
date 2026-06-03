// ======================================================
// RESOLUCIONES PARA EL DOCENTE
// Ejercicios 1 a 9 - JavaScript DOM
// ======================================================

// Ejercicio 1
// const titulo = document.querySelector("#titulo");
// titulo.textContent = "Clase de DOM con JavaScript";

// Ejercicio 2
// const descripcion = document.querySelector(".descripcion");
// descripcion.style.color = "red";
// descripcion.style.fontSize = "20px";

// Ejercicio 3
// const noticia = document.querySelector("#noticia");
// const btnCambiarNoticia = document.querySelector("#btnCambiarNoticia");
// btnCambiarNoticia.addEventListener("click", function () {
//     noticia.textContent = "Nueva noticia: JavaScript permite modificar el contenido de una página web.";
// });

// Ejercicio 4
// const caja = document.querySelector("#caja");
// const btnActivar = document.querySelector("#btnActivar");
// btnActivar.addEventListener("click", function () {
//     caja.classList.add("activa");
// });

// Ejercicio 5
// const btnMostrarMensaje = document.querySelector("#btnMostrarMensaje");
// const mensaje = document.querySelector("#mensaje");
// btnMostrarMensaje.addEventListener("click", function () {
//     mensaje.classList.toggle("oculto");
// });

// Ejercicio 6
// const nombreInput = document.querySelector("#nombreInput");
// const btnSaludar = document.querySelector("#btnSaludar");
// btnSaludar.addEventListener("click", function () {
//     alert("Hola, " + nombreInput.value);
// });

// Ejercicio 7
// const nombreValidar = document.querySelector("#nombreValidar");
// const errorNombre = document.querySelector("#errorNombre");
// nombreValidar.addEventListener("blur", function () {
//     if (nombreValidar.value.trim() === "") {
//         errorNombre.textContent = "El nombre es obligatorio.";
//     }
// });
// nombreValidar.addEventListener("focus", function () {
//     errorNombre.textContent = "";
// });

// Ejercicio 8
// const edadInput = document.querySelector("#edadInput");
// const errorEdad = document.querySelector("#errorEdad");
// edadInput.addEventListener("blur", function () {
//     const edad = Number(edadInput.value);
//     if (edadInput.value.trim() === "" || edad < 18) {
//         errorEdad.textContent = "Debes ser mayor de edad.";
//     }
// });
// edadInput.addEventListener("focus", function () {
//     errorEdad.textContent = "";
// });

// Ejercicio 9
// const emailInput = document.querySelector("#emailInput");
// const errorEmail = document.querySelector("#errorEmail");
// emailInput.addEventListener("blur", function () {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailInput.value.trim())) {
//         errorEmail.textContent = "Ingrese un email válido.";
//     }
// });
// emailInput.addEventListener("focus", function () {
//     errorEmail.textContent = "";
// });
