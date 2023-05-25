const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


Given('User ID is {int}', function(userId) {
    cy.wrap(userId).as('userId');
})

When('I call get user API', function () {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/' + this.userId,
        failOnStatusCode: false
    }).as('getUserResponse');
});

Then('The response status should be 200', function () {
    cy.get('@getUserResponse').its('status').should('equal', 200);
});


Then('The response status should be 404', function () {
    cy.get('@getUserResponse').its('status').should('equal', 404);
});



Then('I should see {string} in response data', function (property) {
    cy.get('@getUserResponse').its(`body.data.${property}`).should('exist');
});

Then('data should not be empty', function () {
    cy.get('@getUserResponse').its(`body.data`).should('not.be.empty');
});
