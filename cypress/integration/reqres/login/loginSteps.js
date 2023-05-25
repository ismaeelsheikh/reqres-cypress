const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');




Given('I have valid user credentials', function () {
    // Set the valid email and password as global variables
    cy.wrap('eve.holt@reqres.in').as('email');
    cy.wrap('cityslicka').as('password');
  });

Given('I have invalid user credentials', function () {
  // Set the invalid email and password as global variables
  cy.wrap('peter@klaven').as('email');
  cy.wrap('').as('password');
});

When('I log in to API', function () {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
            email: this.email,
            password: this.password
        },
        failOnStatusCode: false
    }).as('loginResponse');
});

Then('The response status should be 200', function () {
    cy.get('@loginResponse').its('status').should('equal', 200);
});

Then('The response status should be 400', function () {
    cy.get('@loginResponse').its('status').should('equal', 400);
});

Then('I should see token in response', function () {
    cy.get('@loginResponse').its('body.token').should('exist');
});

Then('I should see error in response', function () {
    cy.get('@loginResponse').its('body.error').should('exist');
});
