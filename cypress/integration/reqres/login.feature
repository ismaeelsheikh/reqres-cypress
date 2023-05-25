Feature: Login to API

    As a valid user
    I want to log in into reqres.in API with valid credentials

    Scenario: Successful Login
    Given I have valid user credentials
    When I log in to API
    Then The response status should be 200
    And I should see token in response

    Scenario: Unsuccessful Login
    Given I have invalid user credentials
    When I log in to API
    Then The response status should be 400
    And I should see error in response