export class ProductPage {
    navigateToFirstProduct() {
        cy.get('.core').first().click();
    }

    addToCart() {
        cy.get('button').contains('Add to cart').click();
    }
}
