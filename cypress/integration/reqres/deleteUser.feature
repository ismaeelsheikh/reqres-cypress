Feature: Delete User API

    As a user
    I want to be able to delete a user given his ID

    Scenario: Delete User
    When I call delete user API with user ID
    Then The response status should be 204
