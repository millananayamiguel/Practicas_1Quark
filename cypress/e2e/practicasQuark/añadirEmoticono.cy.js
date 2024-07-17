/// <reference types="cypress" />

describe('visit page', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/typescript-react/#/')
    })
    it('add task with emotic', () => {
      cy.get('.new-todo').should('be.visible').type(':( {enter}')
      
    });
})