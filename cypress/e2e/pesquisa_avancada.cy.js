/// <reference types="cypress" />

import {setCypress, wait,} from "./service"

setCypress(cy);

describe('Cenário 1: Pesquisa avançada', () => {
    it('Pesquisa avançada', () => {
        cy.visit('https://www.ebay.com/')
        wait()
        // botao pesquisa avançada
        cy.get('#gh-as-a').click()
        wait()
        // pesquisa avançada sobre violão
        cy.get('[data-testid="_nkw"]').type('acoustic guitar')
        wait()
        // pesquisa por titulo e descrição
        cy.get('[data-testid="s0-1-17-5[1]-[0]-LH_TitleDesc"]').click()
        wait()
        // aceitar ofertas
        cy.get('[data-testid="s0-1-17-6[3]-[0]-LH_BO"]').click()
        wait()
        // marcar como novo
        cy.get('[data-marko-key="@field[] s0-1-17-6[4]"] > .field__label--end').click()
        // devolução grátis
        cy.get('[data-marko-key="@field[] s0-1-17-5[5]"] > .field__label--end').click()
        wait()
        // marcar todos países
        cy.get('[data-marko-key="@field[]_3 s0-1-17-6[7]"] > .field__label--end').click()
        wait()
        // realizar pesquisar
        cy.get('.adv-form__actions > .btn').click()
    })
})