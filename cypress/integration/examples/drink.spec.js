describe("Get a single drink", () => {
  it("should return a specific single drink", () => {
    cy.visit('http://localhost:3000') 
    cy.get('.drink-button').contains('Single', {timeout: 15000}).click()
    cy.get('.alert').contains('Moonshine');
    });
});

describe("Get a double drink", () => {
  it("should return a specific double drink", () => {
    cy.visit('http://localhost:3000') 
    cy.get('.drink-button').contains('Double', {timeout: 15000}).click()
    cy.get('.alert').contains('Bourbon');
    });
});

describe("Get a bottle drink", () => {
  it("should return a specific bottle drink", () => {
    cy.visit('http://localhost:3000') 
    cy.get('.drink-button').contains('Bottle', {timeout: 15000}).click()
    cy.get('.alert').contains('Firewater Whiskey');
    });
});