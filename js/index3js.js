function iniciar() {
    nombre1 = document.getElementById("nombre");
    nombre2 = document.getElementById("apellido");
    nombre1.addEventListener("input", validacion, false);
    nombre2.addEventListener("input", validacion, false);
    validacion();
}

function validacion() {
    if (nombre1.value == '' && nombre2.value == '') {
        nombre1.setCustomValidity('inserte al menos un nombre');
        nombre1.style.background = '#FFDDDD';
    } else {
        nombre1.setCustomValidity('');
        nombre1.style.background = '#FFDDDD';
    }
}
window.addEventListener("load", iniciar, false);