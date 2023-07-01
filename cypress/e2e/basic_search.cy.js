/// <reference types ="cypress" />

describe('Pesquisa básica de produtos', () => {

  beforeEach(() => {
    cy.visit('https://www.ebay.com/')
  })

  it('Pesquisa geral', () => {
    cy.get('#gh-ac').type('minecraft')
    cy.wait(500)
    cy.get('#gh-btn').click()

    // filtrar apenas para o Xbox 360
    cy.get('#x-refine__group_1__0 > .x-refine__main__value > :nth-child(1) > .x-refine__multi-select > .x-refine__multi-select-link > .x-refine__select__svg > .checkbox > .checkbox__control').click()
    cy.wait(400)
    //filtrar apenas pelo nome do jogo
    cy.get('#x-refine__group_1__1 > .x-refine__main__value > :nth-child(1) > .x-refine__multi-select > .x-refine__multi-select-link > .x-refine__select__svg > .checkbox > .checkbox__control').click()
    cy.wait(400)
    // desabilitar os filtros
    cy.get(':nth-child(3) > :nth-child(1) > .srp-carousel-list__item-link > div').click()
    cy.wait(200)
    // alternar para a categoria "Leilão"
    cy.get(':nth-child(2) > a > .srp-format-tabs-h2').click()
    
    cy.get('.srp-controls__sort-label').click() //('Duração: novos anúncios')

  })
})