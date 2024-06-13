export class ProductPage {
    navigateToFirstProduct() {
        cy.get('.core').first().click();
    }

    addToCart() {
        cy.wait(1000);
        cy.get('button').contains('Add to cart').click();
        cy.wait(1000);
    }
}
