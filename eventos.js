document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById("miBoton");
    const button = document.getElementById("boton");

    div.addEventListener("click", function() {
        alert("Hola!, soy el Div");
    });

    button.addEventListener("click", function(event) {
        event.stopPropagation();
    })
});
