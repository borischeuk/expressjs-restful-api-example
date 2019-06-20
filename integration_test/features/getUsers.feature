Feature: Get Users API

Scenario: Successfully retrieve users list
  Given I send a GET request to "http://localhost:3000/api/v1/users"
  Then the response status should be "200"
  And the JSON response root should be array
  And the JSON response should have required key "$[0].userId" of type string
  And the JSON response should have required key "$[0].username" of type string