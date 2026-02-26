function saludar(nombre) {
  if (!nombre) {
    return "Hola";
  }
  return `Hola ${nombre}`;
}

export default saludar;
