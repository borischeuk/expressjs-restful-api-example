import { createNamespace } from 'continuation-local-storage';
import uuid from 'node-uuid';

const createRequestId = (req, res, next) => {
  let request = createNamespace('request');
  request.run(function() {
    request.set('requestId', uuid.v1());
    next();
  });
};

export default {
  createRequestId
};