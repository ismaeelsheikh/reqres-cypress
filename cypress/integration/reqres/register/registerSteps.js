const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


Given('I have valid user details', function () {
    // Set the valid email and password as global variables
    cy.wrap('eve.holt@reqres.in').as('email');
    cy.wrap('pistol').as('password');
  });

Given('I have invalid user details', function () {
  // Set the invalid email and password as global variables
  cy.wrap('sydney@fife').as('email');
  cy.wrap('').as('password');
});

When('I register as a user on API', function () {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
            email: this.email,
            password: this.password
        },
        failOnStatusCode: false
    }).as('registerResponse');
});

Then('The response status should be 200', function () {
    cy.get('@registerResponse').its('status').should('equal', 200);
});

Then('The response status should be 400', function () {
    cy.get('@registerResponse').its('status').should('equal', 400);
});

Then('I should see id in response', function () {
    cy.get('@registerResponse').its('body.id').should('exist');
});

Then('I should see token in response', function () {
    cy.get('@registerResponse').its('body.token').should('exist');
});

Then('I should see error in response', function () {
    cy.get('@registerResponse').its('body.error').should('exist');
});
