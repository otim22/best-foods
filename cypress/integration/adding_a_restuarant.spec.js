describe('adding a restuarant', () => {
  it('displays the restuarant in the list', () => {
    const restuarantName = 'Sushi! Place';

    cy.visit('http://localhost:3000');

    // modal not shown at start
    cy.get('[data-test="newRestuarantName"]')
      .should('not.be.visible');
    
    // modal can be cancel
    cy.get('[data-test="addResturantButton"]').click();

    cy.get('[data-test="addRestuarantModal"] button.modal-close').click();
    
    cy.get('[data-test="newRestuarantName"]')
      .should('not.be.visible');

    // modals allows adding restuarant
    cy.get('[data-test="addResturantButton"]').click();

    cy.get('[data-test="newRestuarantName"]')
      .type(restuarantName);

    cy.get('[data-test="saveNewResturantButton"]')
      .click();

    cy.get('[data-test="newRestuarantName"]')
      .should('not.be.visible');

    cy.contains(restuarantName);
  });
});
