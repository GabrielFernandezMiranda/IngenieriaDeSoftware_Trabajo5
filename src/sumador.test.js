import saludar from "./sumador.js";

describe("Saludar segun hora, genero y edad", () => {
  it("devuelve Buenos días sin nombre en la mañana", () => {
    expect(saludar(undefined, undefined, undefined, 8)).toEqual("Buenos días");
  });

  it("agrega Sr. para hombre >30", () => {
    expect(saludar("Paco", "masculino", 35, 9)).toEqual("Buenos días Sr. Paco (masculino)");
  });

  it("agrega Sra. para mujer >30", () => {
    expect(saludar("Ana", "femenino", 40, 10)).toEqual("Buenos días Sra. Ana (femenino)");
  });

  it("no agrega prefijo si edad <=30", () => {
    expect(saludar("Luis", "masculino", 30, 14)).toEqual("Buenas tardes Luis (masculino)");
  });

  it("Buenas noches sin género ni edad", () => {
    expect(saludar(undefined, undefined, undefined, 22)).toEqual("Buenas noches");
  });
});


