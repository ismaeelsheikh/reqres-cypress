Feature: List Users API

    As a user
    I want to be able to retrieve a list of users from API
    So that I can view user data

    Scenario: List Users
    When I call list users API
    Then The response status should be 200
    And I should see "page" in response
    And I should see "per_page" in response
    And I should see "total" in response
    And I should see "total_pages" in response
    And I should see "data" in response
    And data should not be empty
