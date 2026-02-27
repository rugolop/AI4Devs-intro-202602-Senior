const input = document.getElementById("textoInput");
const boton = document.getElementById("invertirBtn");
const resultado = document.getElementById("resultado");

// Mostrar u ocultar el botón según la longitud del texto
input.addEventListener("input", function () {
    if (input.value.length > 3) {
        boton.style.display = "inline";
    } else {
        boton.style.display = "none";
    }
});

// Lógica para invertir el texto
boton.addEventListener("click", function () {
    const textoOriginal = input.value;
    const textoInvertido = textoOriginal.split("").reverse().join("");
    resultado.textContent = textoInvertido;
});