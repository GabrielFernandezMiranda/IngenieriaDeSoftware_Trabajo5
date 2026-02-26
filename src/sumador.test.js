import saludar from "./sumador.js";

describe("Saludar", () => {
  it("deberia devolver Hola", () => {
    expect(saludar()).toEqual("Hola");
  });
});


