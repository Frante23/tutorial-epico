const boton = document.getElementById("botonSaludo");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    mensaje.textContent = "¡Hola! Este mensaje viene desde JavaScript.";
});
