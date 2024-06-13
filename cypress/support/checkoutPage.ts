interface ShippingInformation {
    address: string;
    city: string;
    phone: string;
}

export class CheckoutPage {
    proceedToCheckout() {
        cy.get('.btn._prim.-fw').click({force: true});
        cy.get("[id='input_identifierValue']").type("patdwait@gmail.com");
        cy.wait(1000);
        cy.get("button[class='mdc-button mdc-button--touch mdc-button--raised access-btn']").click();
        cy.wait(500);
    }

}