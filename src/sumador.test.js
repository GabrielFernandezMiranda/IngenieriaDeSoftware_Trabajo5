import saludar from "./sumador.js";

describe("Saludar segun hora", () => {
  it("devuelve Buenos días sin nombre en la mañana", () => {
    expect(saludar(undefined, 8)).toEqual("Buenos días");
  });

  it("devuelve Buenos días con nombre en la mañana", () => {
    expect(saludar("Paco", 9)).toEqual("Buenos días Paco");
  });

  it("devuelve Buenas tardes en la tarde", () => {
    expect(saludar(undefined, 15)).toEqual("Buenas tardes");
  });

  it("devuelve Buenas noches en la noche", () => {
    expect(saludar(undefined, 22)).toEqual("Buenas noches");
  });
});


