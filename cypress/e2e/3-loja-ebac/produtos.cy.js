/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve selecionar um produto', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            .eq(2)
            .click()
      
        cy.get('.single_add_to_cart_button').should('contain', 'Comprar')
    });

    it.only('Deve selecionar um produto por texto', () => {
        cy.get('.products > .row')
            .contains('Apollo Running Short')
            .click()
      
        cy.get('.single_add_to_cart_button').should('contain', 'Comprar')
        
    });
});