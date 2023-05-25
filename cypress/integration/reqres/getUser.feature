Feature: Get User API

    As a user
    I want to be able to retrieve a user given his ID
    So that I can view user's data

    Scenario: Get User by existing ID
    Given User ID is 2
    When I call get user API
    Then The response status should be 200
    And data should not be empty
    And I should see "id" in response data
    And I should see "email" in response data
    And I should see "first_name" in response data
    And I should see "last_name" in response data
    And I should see "avatar" in response data

    Scenario: Get User by non-existing ID
    Given User ID is 99
    When I call get user API
    Then The response status should be 404
