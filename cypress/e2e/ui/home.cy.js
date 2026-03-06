/// <reference types="cypress" />


describe('Playground UI', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('Playground')
  })
})