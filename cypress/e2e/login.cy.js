//const loginPage = require('../support/pages/loginPage')
/// <reference types="cypress" />
import { faker } from "@faker-js/faker"
import loginPage from "../support/pages/loginPage"
import telas from "../utils/devices"

const usuarioValido = 'maxianmuller2008@gmail.com'
const senhaValida = faker.internet.password({length: 8})
const senhaInvalida = faker.internet.password({length: 2})
const usuarioInvalido = 'maxianmuller2008@gmail'

telas.forEach(devices => {

describe('Login', () =>{

    beforeEach('Validar em mais de uma tela', () =>{
        if(devices !='desktop'){
            cy.viewport(devices)
        }
    })

    it('Login com sucesso', () =>{
        loginPage.acessarUrlLogin()
        loginPage.preencherEmail(usuarioValido)
        loginPage.preencherSenha(senhaValida)
        loginPage.clicarEmLogin()
        loginPage.clicarEmOkLoginRealizado()
    })

    it('Login com senha invalida', () =>{
        loginPage.acessarUrlLogin()
        loginPage.preencherEmail(usuarioValido)
        loginPage.preencherSenha(senhaInvalida)
        loginPage.clicarEmLogin()
        loginPage.validarMsg('Senha inválida.')
    })

    it('Login com usuario invalido', () =>{
        loginPage.acessarUrlLogin()
        loginPage.preencherEmail(usuarioInvalido)
        loginPage.preencherSenha(senhaValida)
        loginPage.clicarEmLogin()
        loginPage.validarMsg('E-mail inválido.')
    })

})

});