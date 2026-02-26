function saludar(nombre, genero, edad, hora) {
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

  // añade prefijo Sr/Sra si hay edad>30 y género
  if (nombre) {
    let prefijo = "";
    if (typeof edad === "number" && edad > 30) {
      if (genero === "masculino") {
        prefijo = "Sr. ";
      } else if (genero === "femenino") {
        prefijo = "Sra. ";
      }
    }
    resultado += ` ${prefijo}${nombre}`;
  }

  if (genero) {
    resultado += ` (${genero})`;
  }

  return resultado;
}

export default saludar;
