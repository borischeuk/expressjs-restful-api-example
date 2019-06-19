import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import http from 'http';
import healthChecks from './utils/healthChecks';

import routes from './routes';
import environments from './environments';
import uniqueRequestId from './middlewares/uniqueRequestId';

const app = express();
const server = http.createServer(app);

// Middleware
app.use(bodyParser.json());
app.use(expressValidator());
app.use(uniqueRequestId.createRequestId);

// Routes
app.use('/api/v1/users', routes.users);
app.use('/api/v1/posts', routes.posts);

healthChecks.healthCheckSetup(server);

let port = environments.port ? environments.port : 3000;
server.listen(port, () => {
  console.log(`server running on port ${port}`)
});