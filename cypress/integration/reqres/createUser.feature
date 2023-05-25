Feature: Create User API

    As a user
    I want to be able to create a user given his details

    Scenario: Create User
    When I call create user API with user details
    Then The response status should be 201
    And response should not be empty
    And I should see "name" in response
    And I should see "job" in response
    And I should see "id" in response
    And I should see "createdAt" in response
