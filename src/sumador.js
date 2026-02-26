function saludar(nombre, hora) {
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

  if (!nombre) {
    return saludoHora;
  }
  return `${saludoHora} ${nombre}`;
}

export default saludar;
