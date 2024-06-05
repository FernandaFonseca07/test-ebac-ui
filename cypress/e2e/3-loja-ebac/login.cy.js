/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer o login com sucesso', () => {
        cy.get('#username').type('fernanda123@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda123 (não é fernanda123? Sair)')
    })

    it('Deve exibir mensagem de erro de email invalido', () => {
        cy.get('#username').type('fernanda@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Deve exibir erro de senha invalida', () => {
        cy.get('#username').type('fernanda123@teste.com')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    });

    it('Deve fazer o login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda123 (não é fernanda123? Sair)')
    })

    it('Deve fazer o login com sucesso usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda123 (não é fernanda123? Sair)')
        })
    })

    it.only('Deve fazer o login com sucesso usando comandos customizados', () => {
        cy.login (perfil.usuario, perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda123 (não é fernanda123? Sair)')
        })
})