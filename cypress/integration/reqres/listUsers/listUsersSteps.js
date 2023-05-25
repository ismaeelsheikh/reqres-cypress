const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


When('I call list users API', function () {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users',
        failOnStatusCode: false
    }).as('listUsersResponse');
});

Then('The response status should be 200', function () {
    cy.get('@listUsersResponse').its('status').should('equal', 200);
});


Then('I should see {string} in response', function (property) {
    cy.get('@listUsersResponse').its(`body.${property}`).should('exist');
});

Then('data should not be empty', function () {
    cy.get('@listUsersResponse').its(`body.data`).should('not.be.empty');
});
