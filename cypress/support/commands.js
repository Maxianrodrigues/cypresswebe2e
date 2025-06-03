// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

const elementos = {

    buttons:{

        btnCadastro: '.fa-lock',
        btnAbout: '.footer_one_widget',
        menuOpcoes: '.offcanvas-toggle.offside-menu',
        dropDownMyAcount: '#menuHome',
        btnPages: '#menupagesText',
        btnMobileSubMenus: '.mobile-sub-menu',
        btnMyAcount: '#myAccountPage',
    },

    fields:{
        
    },

    labels:{
        lblTotalOrdens: '.vendor_top_box',
        lblTotalDeliveryPending: '.vendor_top_box',
        lblPendingOrdens: '.vendor_order_boxed.pt-4 h4',
        lblAllgOrdens: '.vendor_order_boxed.pt-4 h4',
        lblTopoPendigOrdens: '.thead-light',
    }
}

Cypress.Commands.add('AcessarCadastro', () => { 
    cy.get(elementos.buttons.btnCadastro)
        .click()
 })

 Cypress.Commands.add('ClicarEmAbout', () =>{
    cy.get(elementos.buttons.btnAbout).contains('a', 'About us').click()
 })

 Cypress.Commands.add('AcionarMenu', () =>{
    cy.get(elementos.buttons.menuOpcoes).click()
 })

 Cypress.Commands.add('ExpandirPages', () =>{
    cy.get(elementos.buttons.btnPages).click()
    cy.get(elementos.buttons.btnMyAcount).click()
 })

Cypress.Commands.add('ValidarExibicaoTotalOrdens', () =>{
    cy.get(elementos.labels.lblTotalOrdens).contains('h4', 'Total Orders')
    cy.get(elementos.labels.lblTotalOrdens).should('contain.text', 'Total Orders')
})

Cypress.Commands.add('ValidarExibicaoTotalDelivery', () =>{
    cy.get(elementos.labels.lblTotalDeliveryPending).eq(1)
    .should('contain.text', 'Total Delivery')
})

Cypress.Commands.add('ValidarExibicaoTotalPending', () =>{
    cy.get(elementos.labels.lblTotalDeliveryPending).eq(2)
    .should('contain.text', 'Total Pending')
})

Cypress.Commands.add('ValidarExibicaoPendingOrders', () =>{
    cy.get(elementos.labels.lblPendingOrdens).eq(0)
    .should('have.text', 'Pending Orders')
})

Cypress.Commands.add('ValidarExibicaoAllOrders', () =>{
    cy.get(elementos.labels.lblPendingOrdens).eq(1)
    .should('have.text', 'All Orders')
})

Cypress.Commands.add('ValidarColunasPendingOrders', () =>{
    cy.get(elementos.labels.lblTopoPendigOrdens).eq(0)
    .contains('tr', 'Image')
    .contains('tr', 'Product Name')
})