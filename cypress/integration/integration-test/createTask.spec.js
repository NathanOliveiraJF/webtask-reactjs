/// <reference types="cypress" />

describe("teste modal form", () => {
  it("open modal", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-cy=openModal]").click();

    cy.get("form");

    cy.get('input[name="title"]')
      .type("cypress")
      .should("have.value", "cypress");

    cy.get('input[name="desc"]')
      .type("teste com cypress")
      .should("have.value", "teste com cypress");

    cy.get("[data-cy=submit]").click();

    cy.contains("Descrição - teste com cypress");
    cy.contains("cypress");
  });
});


