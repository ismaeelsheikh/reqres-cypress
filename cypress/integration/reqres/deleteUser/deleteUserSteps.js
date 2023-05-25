const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


When('I call delete user API with user ID', function () {
    cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2',
        failOnStatusCode: false
    }).as('deleteUserResponse');
});

Then('The response status should be 204', function () {
    cy.get('@deleteUserResponse').its('status').should('equal', 204);
});
