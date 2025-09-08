/// <reference types="cypress" />

const dataAtual = new Date().toISOString().slice(0, 16)

const body_put = {
                "name": "CELULAR MAXITESTE",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }

const body =  {
                "name": "CELULAR MAXI",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }

describe('Alterando dados via api', () =>{

    it('Alterando dados de dispositivo recem cadastrado', ()=>{

        cy.cadastrarDispositivo()
        .then((response) =>{

            expect(response.status).equal(200)
            const id = response.body.id
            console.log(id)
            console.log(dataAtual)
            
             cy.alterarCadastroDispositivo(id)
             .then((response_put) =>{

                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(body_put.name)
                expect(response_put.body.updatedAt.slice(0, 16)).equal(dataAtual)
            })
            
        })

    })
})