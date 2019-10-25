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
        cy.get('h1#popTitle').should('have.text', 'Die Hard with a Vengeance');
    })
    it('should filter correctly', () => {
        cy.get('input').click().type('Die');
        cy.get('Button#searchButton').click();
        cy.get('Button#options').click();
        cy.get('Button#action').click();
        cy.get('img').first().click();
    })
});

