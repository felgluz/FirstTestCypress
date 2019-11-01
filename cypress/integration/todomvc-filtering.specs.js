/// <reference types="cypress" />
//To download the packages automatically

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn Javascript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        //cy.get('.todo-list li:nth-child(2) .toogle').click()        
        cy.get(':nth-child(2) > .view > .toggle').click()
    })

    it('should filter "Active" todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)        
    })

    it('should filter "Completed" todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter "Active" todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })
})