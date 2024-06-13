import { SearchPage } from "../support/searchPage";
import { ProductPage } from "../support/productPage";
import { CartPage } from "../support/cartPage";
import { CheckoutPage } from "../support/checkoutPage";
const searchPage = new SearchPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('Search Functionality', () => {
    beforeEach(() => {
        searchPage.visit();
    });

    it('should search for a product and verify search results', () => {
        searchPage.searchProduct('laptop');
        cy.wait(1000);
        cy.url().should('include', '/catalog/?q=laptop');
        cy.wait(1000);
    });

    it('should search for a product that does not exist and verify the message', () => {
        searchPage.searchProduct('nonexistentproduct');
        cy.wait(1000);
        cy.get('.-pvs.-fs16').should('contain', 'There are no results');
        cy.wait(1000);
    });

    it('should search for a product and navigate to the product details page', () => {
        searchPage.searchProduct('laptop');
        cy.wait(1000);
        productPage.navigateToFirstProduct();
        searchPage.getSearchResults()
        cy.wait(1000)
    });
});

describe('Cart Functionality', () => {
    beforeEach(() => {
        searchPage.visit();
        searchPage.searchProduct('laptop');
        cy.wait(1000);
    });

    it('should add a product to the cart from the search results page', () => {
        productPage.navigateToFirstProduct();
        cy.wait(1000);
        productPage.addToCart();
        cy.wait(1000);
    });

    it('should view the cart and verify the added product', () => {
        productPage.navigateToFirstProduct();
        cy.wait(1000);
        productPage.addToCart();
        cy.wait(1000);
        cartPage.viewCart();
        cy.wait(1000);
        cartPage.verifyProductInCart('laptop');
        cy.wait(1000);
    });

    it('should remove a product from the cart', () => {
        productPage.navigateToFirstProduct();
        cy.wait(1000);
        productPage.addToCart();
        cy.wait(1000);
        cartPage.viewCart();
        cy.wait(1000);
        cartPage.removeProduct();
        cy.get('.-paxs').should('not.exist');
        cy.wait(1000);
    });

    it('should continue shopping from the cart page', () => {
        productPage.navigateToFirstProduct();
        cy.wait(1000);
        productPage.addToCart();
        cy.wait(1000);
        cartPage.viewCart();
        cy.wait(1000);
        cartPage.continueShopping();
        cy.url().should('include', 'jumia.co.ke');
        cy.wait(1000);
    });
   
});

describe('Checkout Functionality', () => {
    beforeEach(() => {
        searchPage.visit();
        searchPage.searchProduct('laptop');
        cy.wait(1000);
        productPage.navigateToFirstProduct();
        cy.wait(1000);
        productPage.addToCart();
        cy.wait(1000);
        cartPage.viewCart();
        cy.wait(1000);
        checkoutPage.proceedToCheckout();
    });

    it('should proceed to checkout from the cart page', () => {
        cy.get('#btn-use-passkey').should('contain', 'Login with Passkeys');
        cy.wait(1000);
    });
    
});