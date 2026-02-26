describe("Saludar", () => {
  it("Displays Hola nombre when a name is entered", () => {
    cy.visit("/");
    cy.get("#nombre-input").type("Ana");
    cy.get("#saludar-button").click();
    cy.get("#resultado-div").should("contain", "Hola Ana");
  });
});
