/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import loginPage from '../support/pages/loginPage';
import cadastroPage from '../support/pages/cadastroPage';
import telas from '../utils/devices';

const nomeUsuario = faker.person.firstName('male')
const senhaUsuario = faker.internet.password({length: 8})
const emailUsuario = faker.internet.email({firstName: nomeUsuario})

const msgErroCampoNome = 'O campo nome deve ser prenchido';
const msgErroCampoEmail = 'O campo e-mail deve ser prenchido corretamente';
const msgErroSenha = 'O campo senha deve ter pelo menos 6 dígitos';

//foreach de telas
telas.forEach(devices => {


describe('Cadastro de usuarios', () =>{

    beforeEach('Acessando tela inicial', () =>{

        if(devices != 'desktop'){
            cy.viewport(devices)
        }

        
    })

    it('Cadastro com campos vazios', () =>{
        loginPage.acessarUrlLogin()
        cy.AcessarCadastro()//usando pageObjects via commands
        cadastroPage.clicarEmLogin()
        cadastroPage.validarMsgDeErro(msgErroCampoNome)
    })

    it('Cadastro com usuario vazio', () =>{
        loginPage.acessarUrlLogin()
        cy.AcessarCadastro()//usando pageObjects via commands
        cadastroPage.preencherEmail('maxianmuller2008@gmail.com')
        cadastroPage.clicarEmLogin()
        cadastroPage.validarMsgDeErro(msgErroCampoNome)
    })

    it('Cadastro com email vazio', () =>{
        loginPage.acessarUrlLogin()
        cy.AcessarCadastro()//usando pageObjects via commands
        cadastroPage.preencherNome(nomeUsuario)
        cadastroPage.clicarEmLogin()
        cadastroPage.validarMsgDeErro(msgErroCampoEmail)
    })

    it('Cadastro com senha vazia', () =>{
        loginPage.acessarUrlLogin()
        cy.AcessarCadastro()//usando pageObjects via commands
        cadastroPage.preencherNome(nomeUsuario)
        cadastroPage.preencherEmail('maxianmuller2008@gmail.com')
        cadastroPage.clicarEmLogin()
        cadastroPage.validarMsgDeErro(msgErroSenha)
    })

    it.only('Cadastro com sucesso', () =>{
        loginPage.acessarUrlLogin()
        cy.AcessarCadastro()//usando pageObjects via commands
        cadastroPage.preencherNome(nomeUsuario)
        cadastroPage.preencherEmail(emailUsuario)
        cadastroPage.preencherSenha(senhaUsuario)
        cadastroPage.clicarEmLogin()
        cadastroPage.validarMsgSucessoCadastro(nomeUsuario)
        cadastroPage.clicarOkCadastroComSucesso()
    })
})

});