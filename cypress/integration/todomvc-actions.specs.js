/// <reference types="cypress" />
//To download the packages automatically

describe('todo actions', () => {
    beforeEach(() => { //before each test of this describe group
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}") //press ENTER key with timeout 
    })

    it('should add a new todo to the list', () => {              //it.only to run only this one
        cy.get('label').should('have.text', 'Clean room')    
        cy.get('.toggle').should('not.be.checked')
    })
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')    
    })
})



//cypress.json: configuration file
//watchForFileChanges: to rerun Cypress tests when the tests file change