# 1. Create Simple RESTful API
## Prerequisite
- Node.js
- Visual Studio Code (You can also use other IDE, such as Atom)

## 1.1. Create simple RESTful API
1. Create a directory `expressjs-example` and type `npm init` inside the directory. You need to answer some questions to create the project. Press enter to skip them at this moment.
2. Type `npm install --save express body-parser`
3. Create `index.js` in the root with the following content:
``` javascript
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

// Create a very simple endpoint
app.get('/api/v1/users', (req, res) => {
    res.send({
        username: 'Test User'
    });
});

app.listen(3000, () => {
    console.log('server running on port 3000');
})
```
4. In `package.json`, add line `"start": "node index",` in script object to create script for running the application.
5. Type `npm start` and the application will start.


## 1.2. Add Babel
1. Type `npm install --save babel-cli babel-core babel-preset-es2015 babel-register`
2. Create file `.babelrc` and add the following content:
``` json
{  
    "presets": ["es2015"]
}
```
3. Modify the codes in `index.js` as follow:
``` javascript
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());

// Create a very simple endpoint
app.get('/api/v1/users', (req, res) => {
    res.send({
        username: 'Test User'
    });
});

app.listen(3000, () => {
    console.log('server running on port 3000');
})
```
4. Change the start script in package.json to `babel-node index.js`
5. Type `npm start` to test if Babel is installed successfully
