export class CartPage {
    viewCart() {
        cy.get('.-df.-i-ctr.-gy9.-hov-or5.-phs.-fs16').contains('Cart').click();
    }

    verifyProductInCart(productName: string) {
        cy.get('.btn._prim.-fw').contains('Checkout');
    }

    removeProduct() {
        cy.get('button').contains('Remove').first().click();
        cy.wait(1000);
        cy.get('button').contains('Remove Item').first().click();
    }

    continueShopping() {
        cy.get('a.-df.-i-ctr.-mra').click();
    }
}

