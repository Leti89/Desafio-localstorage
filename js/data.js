// Seleccionamos el elemento <span> donde se mostrará el dato
const dataSpan = document.getElementById("data");

// Obtenemos el valor de localStorage con la clave "userData"
const storedData = localStorage.getItem("userData");

// Verificamos si hay un dato almacenado y lo mostramos
if (storedData) {
  dataSpan.textContent = storedData; // Mostramos el dato almacenado
} else {
  dataSpan.textContent = "No hay datos guardados para mostrar."; // Mensaje si no hay datos
}
