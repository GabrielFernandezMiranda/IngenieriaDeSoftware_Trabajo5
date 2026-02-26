import saludar from "./sumador";

const button = document.querySelector("#saludar-button");
const input = document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  const nombre = input.value.trim();
  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
