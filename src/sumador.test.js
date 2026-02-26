import saludar from "./sumador.js";

describe("Saludar segun hora, genero y edad", () => {
  it("devuelve saludo bilingüe sin nombre en la mañana", () => {
    expect(saludar(undefined, undefined, undefined, 8)).toEqual("Buenos días\nGood morning");
  });

  it("agrega Sr. para hombre >30 y traducción", () => {
    expect(saludar("Paco", "masculino", 35, 9)).toEqual(
      "Buenos días Sr. Paco (masculino)\nGood morning Mr. Paco"
    );
  });

  it("agrega Sra. para mujer >30 y traducción", () => {
    expect(saludar("Ana", "femenino", 40, 10)).toEqual(
      "Buenos días Sra. Ana (femenino)\nGood morning Ms. Ana"
    );
  });

  it("no agrega prefijo si edad <=30, pero mantiene inglés", () => {
    expect(saludar("Luis", "masculino", 30, 14)).toEqual(
      "Buenas tardes Luis (masculino)\nGood afternoon Luis"
    );
  });

  it("Buenas noches bilingüe sin género ni edad", () => {
    expect(saludar(undefined, undefined, undefined, 22)).toEqual("Buenas noches\nGood evening");
  });
});


