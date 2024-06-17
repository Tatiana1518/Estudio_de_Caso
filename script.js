document.getElementById("mostrarContrasena").addEventListener("click", function() {
    var contrasenaInput = document.getElementById("contrasena");
    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
        this.textContent = "Ocultar";
    } else {
        contrasenaInput.type = "password";
        this.textContent = "Mostrar";
    }
});