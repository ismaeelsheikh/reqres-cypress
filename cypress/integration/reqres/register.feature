Feature: Register API

    As a user
    I want to be able to register a new account
    So that I can access the system

    Scenario: Successful Registration
    Given I have valid user details
    When I register as a user on API
    Then The response status should be 200
    And I should see token in response
    And I should see id in response

    Scenario: Unsuccessful Registration
    Given I have invalid user details
    When I register as a user on API
    Then The response status should be 400
    And I should see error in response
