/// <reference types="cypress" />

const dataAtual = new Date().toISOString().slice(0, 16)
var idCadastrado =''

describe('BUSCANDO DADOS DA API', () =>{


    it('Busncando dispositivo especifico', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/10',
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.id).equal('10')
            expect(response.body.data['Screen size']).equal(7.9)
            console.log(response)
        })
    })

    it.only('Busncando dispositivo especifico com commands', () =>{

        const idVariavel = 7
        cy.buscarDispositivo(idVariavel)//utilizando commands
        .then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.id).equal('7')
        })
    })

    it('Cadastrar dispositivo', () =>{

        cy.request({
            method: 'POST',
            url: `https://api.restful-api.dev/objects`,
            failOnStatusCode: false,
            body: {
                "name": "CELULAR MAXI",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }

        }).then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.name).equal('CELULAR MAXI')
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)
            idCadastrado = response.body.id
            console.log('ID', idCadastrado)
            
        })
    })

    it('Deletar dispositivo recém cadastrado', () =>{
        cy.request({
            method: 'DELETE',
            url: 'https://api.restful-api.dev/objects/'+ idCadastrado,
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).equal(200)
        })
    })

    it('Deletar dispositivo na sequencia de cadastro', () =>{

        cy.request({
            method: 'POST',
            url: `https://api.restful-api.dev/objects`,
            failOnStatusCode: false,
            body: {
                "name": "CELULAR MAXI2",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((response) =>{
            const newIdCad = response.body.id

            cy.request({
                method: 'DELETE',
                url: 'https://api.restful-api.dev/objects/' + newIdCad,
                failOnStatusCode: false
            }).then((responseDel) =>{
                expect(responseDel.status).equal(200)
            })
        })
    })

})