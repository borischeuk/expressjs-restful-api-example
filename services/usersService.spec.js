import chai from 'chai';

import usersService from './usersService';

describe('usersService', function() {

  describe('retrieveUserById', function() {
    it('Successfully find user record', function() {
      let userId = 'user0001';
      let expectetResult = [{
        userId: 'user0001',
        username: 'Test User 1'
      }];
      let actualResult = usersService.retrieveUserById(userId);
      chai.assert.deepEqual(actualResult, expectetResult);
    });

    it('Failed to find user record', function() {
      let userId = 'abc';
      let expectetResult = [];
      let actualResult = usersService.retrieveUserById(userId);
      chai.assert.deepEqual(actualResult, expectetResult);
    });
  });

});