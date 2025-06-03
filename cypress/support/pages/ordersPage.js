/// <reference types="cypress" />
const elementos = {

    buttons:{
        btnBackTelaOrderSucess: '.theme-btn-one.btn-black-overlay.btn_sm'
    },

    labels:{
        lblOrders: '.fa.fa-cart-arrow-down'
    },

    cards:{
        cardOrders: '.table_page.table-responsive'
    },

    link:{
        lnkSucess: 'a[href="/order-success"]',
        lnkTracking: 'a[href="/order-tracking"]'
    }
}

export default{

    acessarOrders(){
        cy.get(elementos.labels.lblOrders).should('be.visible')
        cy.get(elementos.labels.lblOrders).click()
    },

    visualizaColunasOrders(){
        cy.get(elementos.cards.cardOrders)
        .contains('tr', 'Order').contains('tr', 'Date')
        .contains('tr', 'Status').contains('tr', 'Total')
        .contains('tr', 'Actions')
        cy.get(elementos.cards.cardOrders).then((element =>{
            const texto = element.text();
            cy.log(texto)
        }))
    },

    acessaLinkCompraComSucesso(){
        cy.get(elementos.link.lnkSucess).click()
        cy.get(elementos.buttons.btnBackTelaOrderSucess).click()
    },

    acessarLinkTracking(){
        cy.get(elementos.link.lnkTracking).eq(2).click()
    }
}