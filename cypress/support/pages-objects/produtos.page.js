class produtosPage{

    visitarUrl (){
        cy.visit('produtos')
    }

    buscarproduto(nomeProduto){
        cy.get('[placeholder="Enter your search ..."]').eq(1).type(nomeProduto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()

        
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    addProdutoCarrinho(){

    }

}


export default new produtosPage()