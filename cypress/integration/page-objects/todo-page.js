export class TodoPage {
    navigate(url){
        cy.visit(url)
    }

    addTodo(todoText){
        cy.get('.new-todo', {timeout: 6000}).type(todoText + "{enter}") //press ENTER key with timeout 
    }
}