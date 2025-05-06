

export default {

    acessarUrlLogin() {
        cy.visit('/login')
    },

    preencherEmail(userEmail) {
        cy.get('#user').type(userEmail)
    },

    preencherSenha(senha) {
        cy.get('#password').type(senha)
        cy.wait(3000)
    },

    clicarEmLogin() {
        cy.get('#btnLogin').click()
    },

    clicarEmOkLoginRealizado() {
        cy.get('#swal2-title').should('be.visible')
        .should('have.text', 'Login realizado')
        cy.get('.swal2-confirm.swal2-styled').click()
    },

    validarMsg(mensagem) {
        cy.get('.invalid_input').should('contain', mensagem)
    }
} 