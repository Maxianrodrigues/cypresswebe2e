/// <reference types="cypress" />
import telas from '../utils/devices'
import loginPage from '../support/pages/loginPage'
import { faker } from '@faker-js/faker'

const emailValido = 'maxianmuller2008@gmail.com'
const senhaValida = faker.internet.password({length: 8})

telas.forEach(devices =>{

    describe('tela downloads', () =>{

        beforeEach('definindo telas', () =>{
            
            if (devices != 'desktop') {
                cy.viewport(devices)
            }

        })

        it('validando elementos e clique no botão de donwnload', () =>{

            loginPage.acessarUrlLogin()
            loginPage.preencherEmail(emailValido)
            loginPage.preencherSenha(senhaValida)
            loginPage.clicarEmLogin()
            loginPage.clicarEmOkLoginRealizado()
            cy.acessarDownloads()
            cy.validarColunasTelaDonwloads()
        })

    })
})