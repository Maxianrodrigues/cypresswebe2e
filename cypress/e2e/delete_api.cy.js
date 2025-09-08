describe('Deletar usuario via api', () =>{

    it('Deletar dispositivo na sequencia de cadastro', () =>{

        cy.cadastrarDispositivo()
        .then((response) =>{
            const newIdCad = response.body.id

           cy.deletarDispositivo(newIdCad)
           .then((responseDel) =>{
                expect(responseDel.status).equal(200)
            })
        })
    })

    it('Tentar Deletar id reservado', () =>{

      cy.deletarDispositivo(7)
      .then((response) =>{
            expect(response.status).equal(405)
            expect(response.body.error).equal("7 is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.")
        })
    })
})