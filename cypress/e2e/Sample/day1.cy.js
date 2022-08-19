import 'cypress-xpath'

describe('empty spec', () => {
  xit('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    // cy.get('#user-name').type('standard_user');
    // cy.get('#password').type('secret_sauce');
    // cy.get('#login-button').click();
    // cy.contains('Sauce Labs Fleece Jacket').should('be.visible')
    cy.contains('Accepted usernames are:').should('be.visible')
    cy.get('.form_input').first().type('standard_user')
    cy.get('.form_input').last().type('secret_sauce')
  })

  it('Write Some automation on Way2Automation website resource',()=>{
    cy.visit('https://www.way2automation.com/angularjs-protractor/registeration/#/login')


  })
})