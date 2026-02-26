import saludar from "./sumador.js";

describe("Saludar segun hora y genero", () => {
  it("devuelve Buenos días sin nombre en la mañana", () => {
    expect(saludar(undefined, undefined, 8)).toEqual("Buenos días");
  });

  it("devuelve Buenos días con nombre y género en la mañana", () => {
    expect(saludar("Paco", "masculino", 9)).toEqual("Buenos días Paco (masculino)");
  });

  it("devuelve Buenas tardes con género solo", () => {
    expect(saludar(undefined, "femenino", 15)).toEqual("Buenas tardes (femenino)");
  });

  it("devuelve Buenas noches en la noche", () => {
    expect(saludar(undefined, undefined, 22)).toEqual("Buenas noches");
  });
});


