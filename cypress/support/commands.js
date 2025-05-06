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