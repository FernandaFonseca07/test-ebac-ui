/// <reference types="cypress"/>

describe ('Funcionalidade: Login', () => {
    it('Deve fazer o login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('fernanda123@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda123 (não é fernanda123? Sair)')
    })
})