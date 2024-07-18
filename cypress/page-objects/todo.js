export class TodoPage {

    navegarWeb(){
        cy.visit('https://todomvc.com/examples/typescript-react/#/')
    }

    
    añadirTarea(){
        cy.get('.new-todo').type("comprar pan{enter}")  
    }


    marcarTarea(){
        cy.get('.new-todo').type("comprar pan{enter}")
    }

    limpiarTarea() {
        cy.get('.new-todo').type("comprar pan{enter}")
    }




}
