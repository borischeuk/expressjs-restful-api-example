# 2. File Structure
The following is the file structure I used for this repo:
root
|- controllers
|- environments (For centralizing environment variables)
|- routes
|- services (For the methods relates to business logic)

## 2.1. Controllers
1. Create `controllers` directory and create file `usersController.js` inside
2. Add the following content in file `usersController.js`
``` javascript
const getUsers = (req, res) => {
    res.send({
        username: 'Test User'
    });
}

export default {
    getUsers
}
```

## 2.2. Routes
1. Create `routes` directory and create file `users.js` inside
2. Add the following content in file `users.js`
```
import { Router } from 'express';
import usersController from '../controllers/usersController';

const router = Router();

router.get('/', usersController.getUsers);

export default router;
```
3. Create file `index.js` inside `routes` directory and add the following content
``` javascript
import users from './users';

export default {
  users
}
```
4. Go to `index.js` in root directory and make the following changes
``` javascript
import express from 'express';
...
app.get('/api/v1/users', (req, res) => {
    res.send({
        username: 'Test User'
    });
});
...
```
To
``` javascript
import bodyParser from 'body-parser';
import express from 'express';

import routes from './routes';

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/users', routes.users);

app.listen(3000, () => {
    console.log('server running on port 3000');
});
```
5. Start the application and call the API to test if the changes made successfully

## 2.3. Environments
1. Create directory `environments` and create file `index.js` inside with the following content
``` javascript
const port = process.env.PORT;

export default {
  port
}
```
2. In `index.js` in root directory, make the following changes
    - Replace the following codes
        ``` javascript
        app.listen(3000, () => {
            console.log('server running on port 3000');
        })
        ```
        to
        ```
        let port = environments.port ? port : '3000';
        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        })
        ```
3. Type command `export PORT=8080` and run the application again. The application should listen to 8080 now.
