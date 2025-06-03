import telas from '../utils/devices'
import loginPage from '../support/pages/loginPage'
import ordersPage from '../support/pages/ordersPage'
import { faker } from '@faker-js/faker'

const usuarioValido = 'maxianmuller2008@gmail.com'
const senhaValida = faker.internet.password({length: 8})

telas.forEach(devices =>{

    describe('tela de ordens', () =>{

        beforeEach('Definindo telas', () =>{

            if (devices != 'desktop') {
                cy.viewport(devices)
            }
        })

        it('Validando existencia de colunas e acesso aos links de acoes', () =>{
            loginPage.acessarUrlLogin()
            loginPage.preencherEmail(usuarioValido)
            loginPage.preencherSenha(senhaValida)
            loginPage.clicarEmLogin()
            loginPage.clicarEmOkLoginRealizado()
            ordersPage.acessarOrders()
            ordersPage.visualizaColunasOrders()
            ordersPage.acessaLinkCompraComSucesso()
            ordersPage.acessarLinkTracking()
        })
    })
})