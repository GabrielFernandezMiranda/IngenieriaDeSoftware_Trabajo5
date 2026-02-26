describe("Saludar", () => {
  it("Shows bilingual time-appropriate greeting with prefix for age >30", () => {
    // simulate 9am
    const morning = new Date(2026, 1, 26, 9, 0, 0);
    cy.clock(morning.getTime());

    cy.visit("/");
    cy.get("#nombre-input").type("Ana");
    cy.get("#genero-select").select("femenino");
    cy.get("#edad-input").type("35");
    cy.get("#saludar-button").click();
    cy.get("#resultado-div").should("contain", "Buenos días Sra. Ana (femenino)");
    cy.get("#resultado-div").should("contain", "Good morning Ms. Ana");
  });
});
