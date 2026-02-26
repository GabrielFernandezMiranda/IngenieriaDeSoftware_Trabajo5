describe("Saludar", () => {
  it("Shows time-appropriate greeting with name and gender", () => {
    // simulate 9am
    const morning = new Date(2026, 1, 26, 9, 0, 0);
    cy.clock(morning.getTime());

    cy.visit("/");
    cy.get("#nombre-input").type("Ana");
    cy.get("#genero-select").select("femenino");
    cy.get("#saludar-button").click();
    cy.get("#resultado-div").should("contain", "Buenos días Ana (femenino)");
  });
});
