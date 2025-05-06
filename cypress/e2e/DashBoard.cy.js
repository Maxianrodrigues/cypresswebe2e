import telas from "../utils/devices"
import loginPage from "../support/pages/loginPage"
import { faker } from "@faker-js/faker"

const usuarioValido = 'maxianmuller2008@gmail.com'
const senhaValida = faker.internet.password({length: 8})

describe('DashBoard', () =>{

    it('Clicar em about', () =>{
        loginPage.acessarUrlLogin()
        loginPage.preencherEmail(usuarioValido)
        loginPage.preencherSenha(senhaValida)
        loginPage.clicarEmLogin()
        loginPage.clicarEmOkLoginRealizado()
        cy.ClicarEmAbout()
        cy.AcionarMenu()
        cy.ExpandirPages()
    })

})