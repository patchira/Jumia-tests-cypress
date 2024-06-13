export class SearchPage {
    visit() {
        cy.visit('https://www.jumia.co.ke/');
        cy.wait(1000);
    }

    searchProduct(product: string) {
        cy.get('input[name="q"]').type(product, {force: true});
        cy.wait(1000);
        cy.get('.btn._prim._md.-mls.-fsh0').click({force: true});
        cy.wait(1000);
    }

    getSearchResults() {
        let searchResult;
        cy.get("h3[class='name']").first().invoke("text").then((text) => {
            searchResult = text;
            cy.wait(1000);
            // Verify that the product details page has the product name.
            cy.contains(searchResult);
        });    
    }

}