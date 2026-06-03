// ===============================
// Actividad: Formulario de suscripción
// JavaScript - DOM y eventos
// ===============================

// Selección del formulario
const form = document.querySelector("#subscription-form");

// Selección de campos
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");
const age = document.querySelector("#age");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const postalCode = document.querySelector("#postalCode");
const dni = document.querySelector("#dni");

// Selección de mensajes de error
const errorFullName = document.querySelector("#error-fullName");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");
const errorRepeatPassword = document.querySelector("#error-repeatPassword");
const errorAge = document.querySelector("#error-age");
const errorPhone = document.querySelector("#error-phone");
const errorAddress = document.querySelector("#error-address");
const errorCity = document.querySelector("#error-city");
const errorPostalCode = document.querySelector("#error-postalCode");
const errorDni = document.querySelector("#error-dni");

// Título dinámico
const formTitle = document.querySelector("#form-title");

// Función genérica para mostrar errores
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("input-error");
}

// Función genérica para limpiar errores
function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("input-error");
}

// ===============================
// Funciones de validación
// ===============================

function validateFullName() {
    const value = fullName.value.trim();

    if (value.length <= 6 || !value.includes(" ")) {
        showError(fullName, errorFullName, "El nombre debe tener más de 6 letras y al menos un espacio.");
        return false;
    }

    clearError(fullName, errorFullName);
    return true;
}

function validateEmail() {
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(email, errorEmail, "Debe ingresar un email válido.");
        return false;
    }

    clearError(email, errorEmail);
    return true;
}

function validatePassword() {
    const value = password.value.trim();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(value)) {
        showError(password, errorPassword, "La contraseña debe tener al menos 8 caracteres, formados por letras y números.");
        return false;
    }

    clearError(password, errorPassword);
    return true;
}

function validateRepeatPassword() {
    const value = repeatPassword.value.trim();

    if (value === "") {
        showError(repeatPassword, errorRepeatPassword, "Debe repetir la contraseña.");
        return false;
    }

    if (value !== password.value.trim()) {
        showError(repeatPassword, errorRepeatPassword, "Las contraseñas no coinciden.");
        return false;
    }

    clearError(repeatPassword, errorRepeatPassword);
    return true;
}

function validateAge() {
    const value = age.value.trim();
    const numberValue = Number(value);

    if (value === "" || !Number.isInteger(numberValue) || numberValue < 18) {
        showError(age, errorAge, "La edad debe ser un número entero mayor o igual a 18.");
        return false;
    }

    clearError(age, errorAge);
    return true;
}

function validatePhone() {
    const value = phone.value.trim();
    const phoneRegex = /^\d{7,}$/;

    if (!phoneRegex.test(value)) {
        showError(phone, errorPhone, "El teléfono debe tener al menos 7 dígitos, sin espacios, guiones ni paréntesis.");
        return false;
    }

    clearError(phone, errorPhone);
    return true;
}

function validateAddress() {
    const value = address.value.trim();

    if (value.length < 5 || !value.includes(" ") || !/[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(value) || !/\d/.test(value)) {
        showError(address, errorAddress, "La dirección debe tener al menos 5 caracteres, letras, números y un espacio.");
        return false;
    }

    clearError(address, errorAddress);
    return true;
}

function validateCity() {
    const value = city.value.trim();

    if (value.length < 3) {
        showError(city, errorCity, "La ciudad debe tener al menos 3 caracteres.");
        return false;
    }

    clearError(city, errorCity);
    return true;
}

function validatePostalCode() {
    const value = postalCode.value.trim();

    if (value.length < 3) {
        showError(postalCode, errorPostalCode, "El código postal debe tener al menos 3 caracteres.");
        return false;
    }

    clearError(postalCode, errorPostalCode);
    return true;
}

function validateDni() {
    const value = dni.value.trim();
    const dniRegex = /^\d{7,8}$/;

    if (!dniRegex.test(value)) {
        showError(dni, errorDni, "El DNI debe tener 7 u 8 dígitos.");
        return false;
    }

    clearError(dni, errorDni);
    return true;
}

// ===============================
// Eventos blur: validar al salir del campo
// ===============================

fullName.addEventListener("blur", validateFullName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
repeatPassword.addEventListener("blur", validateRepeatPassword);
age.addEventListener("blur", validateAge);
phone.addEventListener("blur", validatePhone);
address.addEventListener("blur", validateAddress);
city.addEventListener("blur", validateCity);
postalCode.addEventListener("blur", validatePostalCode);
dni.addEventListener("blur", validateDni);

// ===============================
// Eventos focus: limpiar error al volver a editar
// ===============================

fullName.addEventListener("focus", function () {
    clearError(fullName, errorFullName);
});

email.addEventListener("focus", function () {
    clearError(email, errorEmail);
});

password.addEventListener("focus", function () {
    clearError(password, errorPassword);
});

repeatPassword.addEventListener("focus", function () {
    clearError(repeatPassword, errorRepeatPassword);
});

age.addEventListener("focus", function () {
    clearError(age, errorAge);
});

phone.addEventListener("focus", function () {
    clearError(phone, errorPhone);
});

address.addEventListener("focus", function () {
    clearError(address, errorAddress);
});

city.addEventListener("focus", function () {
    clearError(city, errorCity);
});

postalCode.addEventListener("focus", function () {
    clearError(postalCode, errorPostalCode);
});

dni.addEventListener("focus", function () {
    clearError(dni, errorDni);
});

// ===============================
// Bonus: título dinámico con keydown
// ===============================

fullName.addEventListener("keydown", function () {
    // keydown ocurre antes de que el input actualice su value.
    // Por eso usamos setTimeout para leer el valor actualizado.
    setTimeout(function () {
        const value = fullName.value.trim();

        if (value !== "") {
            formTitle.textContent = "HOLA " + value.toUpperCase();
        } else {
            formTitle.textContent = "HOLA";
        }
    }, 0);
});

// ===============================
// Evento submit: validar todo y mostrar cartel
// ===============================

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isRepeatPasswordValid = validateRepeatPassword();
    const isAgeValid = validateAge();
    const isPhoneValid = validatePhone();
    const isAddressValid = validateAddress();
    const isCityValid = validateCity();
    const isPostalCodeValid = validatePostalCode();
    const isDniValid = validateDni();

    const formIsValid =
        isFullNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isRepeatPasswordValid &&
        isAgeValid &&
        isPhoneValid &&
        isAddressValid &&
        isCityValid &&
        isPostalCodeValid &&
        isDniValid;

    if (formIsValid) {
        alert(
            "Formulario enviado correctamente:\n\n" +
            "Nombre completo: " + fullName.value + "\n" +
            "Email: " + email.value + "\n" +
            "Edad: " + age.value + "\n" +
            "Teléfono: " + phone.value + "\n" +
            "Dirección: " + address.value + "\n" +
            "Ciudad: " + city.value + "\n" +
            "Código postal: " + postalCode.value + "\n" +
            "DNI: " + dni.value
        );
    } else {
        alert("El formulario contiene errores. Revisá los campos marcados antes de continuar.");
    }
});
