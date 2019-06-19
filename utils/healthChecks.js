import terminus from '@godaddy/terminus';

const healthCheckSetup = (server) => {
  const options = {
    healthChecks: {
      '/api/v1/health': basicHealthCheck
    }
  }

  terminus.createTerminus(server, options);
};

const basicHealthCheck = () => {
  return Promise.resolve();
}

export default {
  healthCheckSetup
}