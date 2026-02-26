function saludar(nombre, genero, edad, hora) {
  // hora optional for testing; default to current hour
  const h = typeof hora === "number" ? hora : new Date().getHours();

  // Spanish greeting by time
  let saludoHora;
  if (h >= 6 && h < 12) {
    saludoHora = "Buenos días";
  } else if (h >= 12 && h < 20) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  let resultado = saludoHora;

  // prefijo Sr/Sra si edad>30 y genero
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

  // build English version
  let engHour;
  if (h >= 6 && h < 12) {
    engHour = "Good morning";
  } else if (h >= 12 && h < 20) {
    engHour = "Good afternoon";
  } else {
    engHour = "Good evening";
  }

  let eng = engHour;
  if (nombre) {
    let engPrefix = "";
    if (typeof edad === "number" && edad > 30) {
      if (genero === "masculino") {
        engPrefix = "Mr. ";
      } else if (genero === "femenino") {
        engPrefix = "Ms. ";
      }
    }
    eng += ` ${engPrefix}${nombre}`;
  }

  // put english on next line
  return `${resultado}\n${eng}`;
}

export default saludar;
