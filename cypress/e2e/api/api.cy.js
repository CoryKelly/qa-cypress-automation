/// <reference types="cypress" />

describe('API Test', () => {

    it('gets articles', () => {

        // Check Api Status
        cy.env(['apiUrl']).then(({apiUrl}) => {
            cy.request(`${apiUrl}/api/articles`)
            .its('status')
            .should('eq', 200)
        })

    })

})