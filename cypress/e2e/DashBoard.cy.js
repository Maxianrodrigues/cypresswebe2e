import telas from "../utils/devices"
import loginPage from "../support/pages/loginPage"
import { faker } from "@faker-js/faker"

const usuarioValido = 'maxianmuller2008@gmail.com'
const senhaValida = faker.internet.password({length: 8})

describe('Menu DashBoard', () =>{

    it('Validando tela dashboard apos clicar em about', () =>{
        loginPage.acessarUrlLogin()
        loginPage.preencherEmail(usuarioValido)
        loginPage.preencherSenha(senhaValida)
        loginPage.clicarEmLogin()
        loginPage.clicarEmOkLoginRealizado()
        cy.ClicarEmAbout()
        cy.AcionarMenu()
        cy.ExpandirPages()
        cy.ValidarExibicaoTotalOrdens()
        cy.ValidarExibicaoTotalDelivery()
        cy.ValidarExibicaoTotalPending()
        cy.ValidarExibicaoPendingOrders()
        cy.ValidarExibicaoAllOrders()
        cy.ValidarColunasPendingOrders()
    })

})