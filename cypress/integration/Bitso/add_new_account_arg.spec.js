/// <reference types="cypress" />

describe("Testing the sign up process", () => {

  it("Create new account - Argentina", ()=>{

    cy.visit("https://devmalta.bitso.com/register")
    cy.contains("Create an account")

    cy.contains("Got it").click({ force: true })

    cy.get('.styles__Form-sc-1cll17m-4 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5 > .css-tdzd0p')
      .type("Argentina")

    cy.get('#react-select-2-option-9')
        .click({ force: true })

    cy.get('#email')
      .type("random01@gmail.com")
      .should('have.value', 'random01@gmail.com')

    cy.get('#password')
      .type("Mexico213.")

    cy.get('#password_confirmation')
      .type("Mexico213.")

    cy.contains("I accept Bitso International's")
      .click({ force: true })
    cy.contains("I want to receive Bitso news")
      .click({ force: true })
    cy.contains("I accept Bitso's")
      .click({ force: true })

    cy.contains('Start')
    .click({ force: true })

    cy.contains('Verify your email').should('be.visible')
    
})

})