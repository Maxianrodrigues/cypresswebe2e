const dataAtual = new Date().toISOString().slice(0, 16)
var idCadastrado =''



describe('Cadastrar dispositivos', () =>{

    it('Cadastrar dispositivo', () => {

        cy.cadastrarDispositivo()//utilizando o commands
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.name).equal('CELULAR MAXI')
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)
                idCadastrado = response.body.id
                console.log('ID', idCadastrado)

            })
    })
})