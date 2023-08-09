//comentario
window.onload = function() {
    var nombre = prompt("Por favor, ingresa tu nombre:");
        
    if (nombre !== null && nombre !== "") {
        alert("¡Hola, " + nombre + "! Bienvenido a nuestra página web.");
    } else {
        alert("No ingresaste un nombre. Refresca la página para intentarlo de nuevo.");
    }
};