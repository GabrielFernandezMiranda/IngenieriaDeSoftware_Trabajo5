function saludar(nombre, genero, hora) {
  // hora optional for testing; default to current hour
  const h = typeof hora === "number" ? hora : new Date().getHours();

  let saludoHora;
  if (h >= 6 && h < 12) {
    saludoHora = "Buenos días";
  } else if (h >= 12 && h < 20) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  let resultado = saludoHora;
  if (nombre) {
    resultado += ` ${nombre}`;
  }
  if (genero) {
    resultado += ` (${genero})`;
  }

  return resultado;
}

export default saludar;
