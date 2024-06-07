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

    it('Deve buscar um produto com sucesso', () => {
        let nomeProduto = 'Atlas Fitness Tank'
        produtosPage.buscarproduto(nomeProduto)
        cy.get('.product_title').should('contain', nomeProduto)      
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
    });

    it('Deve visitar página produto pela url', () => {
        let nomeProduto = 'Aether Gym Pant'
        produtosPage.visitarPagProduto(nomeProduto)
        cy.get('.product_title').should('contain', nomeProduto) 
    });

    it('Deve adicionar produto ao carrinho', () => {
        let nomeProduto = 'Atlas Fitness Tank'
        produtosPage.buscarproduto(nomeProduto)
        produtosPage.addProdutoCarrinho('M','Blue', '3')
        cy.get('.woocommerce-message').should('contain', nomeProduto)                 
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
        produtosPage.buscarproduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[0].tamanho,dados[0].cor, dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto) 
        })               
    });
});