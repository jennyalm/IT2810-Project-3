describe('App E2E', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('should have a header with text', () => {
        cy.get('h1').should('have.text', 'Group 13');
        cy.contains('Database stats').click()
        cy.get('p#nr').should('have.text', 'Number of movies in database: 100');
    });
    it('should display the correct movie followed by opening pop up', () => {
        cy.get('input').should('have.text', '').click().type('Die Hard with a Vengeance');
        cy.get('Button#searchButton').should('have.value', 'SEARCH').click();
        cy.get("h4").should('have.text', 'Die Hard with a Vengeance');
        cy.get('img').should('have.class', 'Poster').click();
    })
});

