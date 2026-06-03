const formulario = document.querySelector("#formSuscripcion");

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorNombre = document.querySelector("#errorNombre");
const errorEmail = document.querySelector("#errorEmail");
const errorPassword = document.querySelector("#errorPassword");

function validarNombre() {
    const valor = nombre.value.trim();

    if (valor.length <= 6 || !valor.includes(" ")) {
        errorNombre.textContent = "El nombre debe tener más de 6 letras y al menos un espacio.";
        nombre.classList.add("input-error");
        return false;
    }

    errorNombre.textContent = "";
    nombre.classList.remove("input-error");
    return true;
}

function validarEmail() {
    const valor = email.value.trim();

    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionEmail.test(valor)) {
        errorEmail.textContent = "Debe ingresar un email válido.";
        email.classList.add("input-error");
        return false;
    }

    errorEmail.textContent = "";
    email.classList.remove("input-error");
    return true;
}

function validarPassword() {
    const valor = password.value.trim();

    const tieneLetrasYNumeros = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!tieneLetrasYNumeros.test(valor)) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres, con letras y números.";
        password.classList.add("input-error");
        return false;
    }

    errorPassword.textContent = "";
    password.classList.remove("input-error");
    return true;
}

nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);

nombre.addEventListener("focus", function() {
    errorNombre.textContent = "";
    nombre.classList.remove("input-error");
});

email.addEventListener("focus", function() {
    errorEmail.textContent = "";
    email.classList.remove("input-error");
});

password.addEventListener("focus", function() {
    errorPassword.textContent = "";
    password.classList.remove("input-error");
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValida = validarPassword();

    if (nombreValido && emailValido && passwordValida) {
        alert(
            "Formulario enviado correctamente:\n" +
            "Nombre: " + nombre.value + "\n" +
            "Email: " + email.value
        );
    } else {
        alert("El formulario tiene errores. Revise los campos marcados.");
    }
});