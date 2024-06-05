/// <reference types="cypress"/>
import produtosPage from "../../support/pages-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            .eq(2)
            .click()
      
        cy.get('.single_add_to_cart_button').should('contain', 'Comprar')
    });

    it('Deve selecionar um produto por texto', () => {
        cy.get('.products > .row')
            .contains('Apollo Running Short')
            .click()
      
        cy.get('.single_add_to_cart_button').should('contain', 'Comprar')
        
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let nomeProduto = 'Atlas Fitness Tank'
        produtosPage.buscarproduto(nomeProduto)
        cy.get('.product_title').should('contain', nomeProduto)      
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});