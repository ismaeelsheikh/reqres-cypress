const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


When('I call create user API with user details', function () {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
            "name": "morpheus",
            "job": "leader"
        },
        failOnStatusCode: false
    }).as('createUserResponse');
});

Then('The response status should be 201', function () {
    cy.get('@createUserResponse').its('status').should('equal', 201);
});

Then('I should see {string} in response', function (property) {
    cy.get('@createUserResponse').its(`body.${property}`).should('exist');
});

Then('response should not be empty', function () {
    cy.get('@createUserResponse').its(`body`).should('not.be.empty');
});
