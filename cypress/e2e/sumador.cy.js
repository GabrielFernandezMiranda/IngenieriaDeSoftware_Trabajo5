describe("Saludar", () => {
  it("Displays Hola when the button is clicked", () => {
    cy.visit("/");
    cy.get("#saludar-button").click();
    cy.get("#resultado-div").should("contain", "Hola");
  });
});
