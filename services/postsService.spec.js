import chai from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import postsService from './postsService';

describe('postsService', function() {

  describe('getPosts', function() {
    it('Successfully retrieve posts', async function() {
      const mock = new MockAdapter(axios);
      let mockResponse = prepareSuccessfulGetPostsMockResponse();
      mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, mockResponse);

      let actualResult = await postsService.getPosts(null);
      chai.assert.deepEqual(actualResult, mockResponse);
    });

    it('Error returned while calling API', async function() {
      const mock = new MockAdapter(axios);
      let mockResponse = {};
      mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(500, mockResponse);

      let actualResult = await postsService.getPosts(null);
      chai.assert.deepEqual(actualResult, {});
    });
  });

})

const prepareSuccessfulGetPostsMockResponse = () => {
  return [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ]
}