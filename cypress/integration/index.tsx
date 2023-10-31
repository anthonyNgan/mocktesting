describe("Logo?", () => {
  it("should have a logo", () => {
    cy.visit("http://localhost:3000");
    cy.get(".App-logo").should("be.visible");
  });
});
