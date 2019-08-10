describe('adding a restuarant', () => {
  it('displays the restuarant in the list', () => {
    const restuarantName = 'Sushi! Place';

    cy.visit('http://localhost:3000');

    cy.get('[data-test="newRestuarantName"]')
      .should('not.exist');

    cy.get('[data-test="addResturantButton"]')
      .click();

    cy.get('[data-test="newRestuarantName"]')
      .type(restuarantName);

    cy.get('[data-test="saveNewResturantButton"]')
      .click();

    cy.get('[data-test="newRestuarantName"]')
      .should('not.exist');

    cy.contains(restuarantName);
  });
});
