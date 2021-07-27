/// <reference types="cypress" />

describe("Testing the new account and add beneficiary", () => {

      it("Verify wallet Argentina", ()=>{
    
          cy.visit("https://devmalta.bitso.com/login")
          cy.contains("Log in")
            
          cy.contains("Got it").click({ force: true })

          cy.get('#client_id').type("omzayp@gmail.com") 
            .should('have.value', 'omzayp@gmail.com')

          cy.get('#password').type("Mexico213.") 

          cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0')
            .should('not.be.disabled')
            .click({ force: true })
          
          cy.wait(3000)    
          cy.contains('Wallet').should('be.visible')

          cy.get('.Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').its('length').then((size) => {
                  
            for (let i = 2; i <= size; i += 1) {    
              cy.get(`:nth-child(${i}) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1`)  
                .click({ force: true })
                cy.get('.moon-arrow_deposit')  
                .click({ force: true })
                cy.contains('Oops! Something went wrong').should('be.visible')
                cy.contains('Increase my limit').should('be.visible')

                cy.contains('Oops! Something went wrong').type('{esc}')
            }
          })   

          cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add")
          cy.wait(2000) 
          cy.get('#first_name').type("Juan").should('have.value', 'Juan')
          cy.get('#last_name').type("Juan").should('have.value', 'Juan')
          cy.get('#second_last_name').type("Juan").should('have.value', 'Juan')

          cy.get('#dob').type("11011988")
          
          cy.get('.Form__StyledForm-sc-1f7vh8u-0 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5 > .css-tdzd0p')
            .click({ force: true })
          
          cy.get('#react-select-2-option-0')
             .click({ force: true })
          cy.get('#percentage').type("1", { force: true })

          cy.get('[data-testid=add-beneficiary-button]')
          .click({ force: true })

          cy.contains('Confirm beneficiary').should('be.visible')
          cy.get('#pin').type("123", { force: true } )

          cy.get('.hKVypD').click({ force: true })

          cy.contains('Incorrect PIN').should('be.visible')
             

      })

      it("Verify wallet Mexico", ()=>{
    
        cy.visit("https://devmalta.bitso.com/login")
        cy.contains("Log in")
          
        cy.contains("Got it").click({ force: true })

        cy.get('#client_id').type("ypz.omar@gmail.com") 
          .should('have.value', 'ypz.omar@gmail.com')

        cy.get('#password').type("Mexico213.") 

        cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0')
          .should('not.be.disabled')
          .click({ force: true })
        
        cy.wait(3000)    
        cy.contains('Wallet').should('be.visible')

        cy.get('.Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').its('length').then((size) => {
                
          for (let i = 2; i <= size; i += 1) {    
            cy.get(`:nth-child(${i}) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1`)  
              .click({ force: true })
              cy.get('.moon-arrow_deposit')  
              .click({ force: true })
              cy.contains('Oops! Something went wrong').should('be.visible')
              cy.contains('Increase my limit').should('be.visible')

              cy.contains('Oops! Something went wrong').type('{esc}')
          }
        })   

        cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add")
        cy.wait(2000) 
        cy.get('#first_name').type("Juan").should('have.value', 'Juan')
        cy.get('#last_name').type("Juan").should('have.value', 'Juan')
        cy.get('#second_last_name').type("Juan").should('have.value', 'Juan')

        cy.get('#dob').type("11011988")
        
        cy.get('.Form__StyledForm-sc-1f7vh8u-0 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5 > .css-tdzd0p')
          .click({ force: true })
        
        cy.get('#react-select-2-option-0')
           .click({ force: true })
        cy.get('#percentage').type("1", { force: true })

        cy.get('[data-testid=add-beneficiary-button]')
        .click({ force: true })

        cy.contains('Confirm beneficiary').should('be.visible')
        cy.get('#pin').type("123", { force: true } )

        cy.get('.hKVypD').click({ force: true })

        cy.contains('Incorrect PIN').should('be.visible')
           

    })

  })