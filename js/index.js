// Seleccionamos el botón y el campo de entrada
const buttonText = document.getElementById("buttonText");
const inputText = document.getElementById("inputText");

// Evento que se dispara al hacer clic en el botón
buttonText.addEventListener("click", function() {
  // Obtenemos el valor ingresado en el campo de texto
  const text = inputText.value;
  
  // Guardamos el valor en localStorage con la clave "userData"
  if (text) {
    localStorage.setItem("userData", text);
    inputText.value = ""; // Limpiamos el campo de texto
  } else {
    console.log("Por favor, ingresa un texto para guardar.");
  }
});

