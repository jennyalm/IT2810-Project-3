
// npm cypress open, for å åpne testen
// npm cypress run for å kjøre testen


// skal teste search prosessen

describe('My First Test', function() {
    it('finds the content "type"', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })
})