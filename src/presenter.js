import saludar from "./sumador";

const button = document.querySelector("#saludar-button");
const input = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero-select");
const edadInput = document.querySelector("#edad-input");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  const nombre = input.value.trim();
  const gen = genero.value;
  const edad = parseInt(edadInput.value, 10);
  div.innerHTML = "<p>" + saludar(nombre, gen, edad) + "</p>";
});
