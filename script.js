
window.onload = function() {
    var nombre = prompt("Por favor, ingresa tu nombre:");
        
    if (nombre !== null && nombre !== "") {
        alert("¡Hola, " + nombre + "! Bienvenido a nuestra página web.");
    } else {
        alert("No ingresaste un nombre. Refresca la página para intentarlo de nuevo.");
    }
};

$(document).ready(function() {
    $("#formulario").submit(function(event) {
        event.preventDefault();

        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var telefono = $("#telefono").val();
        var requisicion = $("#requisicion").val();

        // Aquí puedes hacer lo que desees con los datos capturados.
        console.log("Nombre: " + nombre);
        console.log("Correo Electrónico: " + correo);
        console.log("Número Telefónico: " + telefono);
        console.log("Requisición: " + requisicion);
    });
});
