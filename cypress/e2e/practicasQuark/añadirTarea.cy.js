/// <reference types="cypress" />

describe('visit page', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/typescript-react/#/')
    })
    it('add task', () => {
      cy.get('.new-todo').should('be.visible').type('comprar el pan {enter}')
      cy.get('.new-todo').should('be.visible').type('12345 {enter}')
      cy.get('.new-todo').should('be.visible').type('"&" {enter}')
      cy.get('.new-todo').should('be.visible').type(':) {enter}')
    });
    
    it ('select comprar el pan', ()=>{
      cy.get('.new-todo').should('be.visible').type('comprar el pan {enter}')
      cy.get('.toggle').check()
     
    })
  })