/// <reference types="cypress" />
describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should load skills list as the button is clicked', () => {
        cy.get('#load-skills-button').click();
        cy.get('li').should('be.visible');
        cy.get('ul').should('be.visible');
    });
    it('should load one skill after input and click search button', () => {
        cy.get('input').type('front-end');
        cy.get('#search-button').click();
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });
    it('checar se o nome esta correto do campo', () => {
        cy.get('h1').should('have.text','Developers App')
        
    })
    it('preencher o campo skill name', () => {
        cy.get('.App > :nth-child(2)').should('have.text','Skill Name')
        cy.get('.App > :nth-child(3)').type('test')       
        cy.get('.App > :nth-child(3)').should('have.value','test')            
    })

    it('preencher o campo Developers', () => {
        cy.get('.App > :nth-child(4)').should('have.text','Developers')
        cy.get('.App > :nth-child(5)').type('test')
        cy.get('.App > :nth-child(5)').should('have.value','test')
    })

    it('preencher o campo Technologies', () => {
        cy.get('.App > :nth-child(6)').should('have.text','Technologies')
        cy.get('.App > :nth-child(7)').type('test')       
        cy.get('.App > :nth-child(7)').should('have.value','test')            
    })

    it('preencher o campo Roles', () => {
        cy.get('.App > :nth-child(8)').should('have.text','Roles')
        cy.get('.App > :nth-child(9)').type('test')       
        cy.get('.App > :nth-child(9)').should('have.value','test')            
    })
    
    it('Verificar se o botão Add Skills esta habilitado', () => {
        cy.get('#load-skills-button').should('have.text','Add Skills')
        cy.get('#load-skills-button').should('be.visible')
               
    })

});