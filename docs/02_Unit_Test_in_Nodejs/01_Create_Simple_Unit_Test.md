# 1. Create Simple Unit Test
1. Type command `npm install --save-dev nyc mocha chai`
2. Create file `usersService.spec.js` inside `services` directory. It is recommended to place the unit test file with the testing target so that it is easier to locate the corresponding unit test file and identify which file does not have unit test
3. Place the following content inside `usersService.spec.js`
``` javascript
import chai from 'chai';

import usersService from './usersService';

describe('usersService', function() {

    describe('getUsersList', function() {
        it('Successfully get users list', function() {
            let expectedResult = [
                {
                    userId: '1',
                    username: 'User 01'
                },
                {
                    userId: '2',
                    username: 'User 02'
                },
                {
                    userId: '3',
                    username: 'User 03'
                }
            ]
            let actualResult = usersService.getUsersList();
            chai.assert.deepEqual(actualResult, expectedResult);
        });
    });

})
```
4. Modify the test script in package.json as follow
``` 
{
    ...
    "scripts": {
        ...
        "test": "nyc --reporter=lcov --reporter=text mocha './{,!(node_modules)/**}/*.spec.js' --require babel-register"
        ...
    }
    ...
}
```
5. Type `npm test` to run the test