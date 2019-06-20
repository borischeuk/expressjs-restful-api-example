Feature: Get Posts API

Scenario: Successfully retrieve posts list
  Given I send a GET request to "http://localhost:3000/api/v1/posts"
  Then the response status should be "200"
  And the JSON response root should be array
  And the JSON response should have required key "$[0].userId" of type numeric
  And the JSON response should have required key "$[0].id" of type numeric
  And the JSON response should have required key "$[0].title" of type string
  And the JSON response should have required key "$[0].body" of type string

Scenario: Successfully query posts by userId
    Given I send a GET request to "http://localhost:3000/api/v1/posts" with:
        | userId |
        |    1   |
    Then the response status should be "200"
    And the JSON response root should be array
    And the JSON response should have "$[*].userId" of type numeric and value "1"

Scenario: Invalid input of userId
    Given I send a GET request to "http://localhost:3000/api/v1/posts" with:
        | userId |
        |  abc   |
    Then the response status should be "400"
    And the JSON response root should be object
    And the JSON response should have required key "$.detailedError" of type object
    And the JSON response should have required key "$.error" of type string
    And the JSON response should have "$.message" of type string and value "Invalid Request Input"
    And the JSON response should have "$.status" of type string and value "400 Bad Request"
    And the JSON response should have required key "$.timestamp" of type string