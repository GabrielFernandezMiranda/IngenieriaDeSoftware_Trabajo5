import saludar from "./sumador";

const button = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  div.innerHTML = "<p>" + saludar() + "</p>";
});
