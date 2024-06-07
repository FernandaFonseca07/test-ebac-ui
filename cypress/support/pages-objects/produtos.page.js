class produtosPage{

    visitarUrl (){
        cy.visit('produtos')
    }

    buscarproduto(nomeProduto){
        cy.get('[placeholder="Enter your search ..."]').eq(1).type(nomeProduto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()      
    }

    visitarPagProduto (urlProduto){
        //cy.visit(`produto/${urlProduto}`)
        const urlFormatada = urlProduto.replace(/ /g, '-')
        cy.visit(`produto/${urlFormatada}`)
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('[data-value="' + cor + '"]').click()
        cy.get('.input-text').click().clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}


export default new produtosPage()