import saludar from "./sumador.js";

describe("Saludar", () => {
  it("deberia devolver Hola cuando no hay nombre", () => {
    expect(saludar()).toEqual("Hola");
  });

  it("deberia saludar con nombre proporcionado", () => {
    expect(saludar("Paco")).toEqual("Hola Paco");
  });
});


