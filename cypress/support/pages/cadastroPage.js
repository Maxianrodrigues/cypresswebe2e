const elementos ={


    fields:{
        fieldNome: '#user',
        fieldEmail: '#email',
        fieldSenha: '#password',
    },

    buttons:{
        btnLogin: '#btnRegister',
        btnOk: '.swal2-confirm'
    },

    labels: {
        lblErrorLabel: '#errorMessageFirstName',
        lblCadastroRealizado: '#swal2-title',
        lblNomeCLienteCadastrado: '#swal2-html-container'
    }
}

export default{

    clicarEmLogin(){
        cy.get(elementos.buttons.btnLogin)
            .click()
    },

    preencherNome(nome){
        cy.get(elementos.fields.fieldNome).type(nome)
    },

    preencherEmail(email){
        cy.get(elementos.fields.fieldEmail).type(email)
    },

    preencherSenha(senha){
        cy.get(elementos.fields.fieldSenha).type(senha)
    },

    validarMsgDeErro(mensagem){
        cy.get(elementos.labels.lblErrorLabel)
            .should('be.visible')
            .should('have.text', mensagem)
    },

    validarMsgSucessoCadastro(nomecliente){
        cy.get(elementos.labels.lblCadastroRealizado)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get(elementos.labels.lblNomeCLienteCadastrado)
            .should('be.visible')
            .should('have.text', 'Bem-vindo ' + nomecliente)
    },

    clicarOkCadastroComSucesso(){
        cy.get(elementos.buttons.btnOk)
            .click()
    }
}