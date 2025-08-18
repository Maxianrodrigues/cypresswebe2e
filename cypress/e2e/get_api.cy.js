/// <reference types="cypress" />



describe('BUSCANDO DADOS DA API', () =>{


    it('Busncando dispositivo especifico', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6',
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).equal(200)
        })
    })

})