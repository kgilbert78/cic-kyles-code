describe("Password Validator", () => {
    it("visits the webpage and checks if the password is too short", () => {
        cy.visit("http://localhost:3000");
        cy.get("#password").type("asdf");
        //cy.contains("Login").click();

        // targets special selector added to button in App.js: 
        // <button data-cy="login" type='submit'>Login</button>
        // [] is css for custom selector
        cy.get("[data-cy=login]").click();

        cy.get("[data-cy=invalid-password]");
    });

    it("visits the webpage and checks for a valid password", () => {
        cy.visit("http://localhost:3000");
        cy.get("#password").type("ai3mgi7gh*");
        cy.get("[data-cy=login]").click();
        cy.get("[data-cy=valid-password]");
    });
});