Feature: Get Users by ID API

Scenario: Successfully retrieve user
  Given I send a GET request to "localhost:3000/api/v1/users/user0001"
  Then the response status should be "200"
  And the JSON response root should be object
  And the JSON response should have required key "userId" of type string
  And the JSON response should have required key "username" of type string

Scenario: Failed to retrieve user
    Given I send a GET request to "localhost:3000/api/v1/users/abc"
    Then the response status should be "200"
    And the JSON response root should be object
    And the JSON response should have "message" of type string and value "User not found"