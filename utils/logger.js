import { getNamespace } from 'continuation-local-storage';
import moment from 'moment';

const info = (logObj) => {
  let requestSpace = getNamespace('request');
  let requestId = requestSpace.get('requestId');
  console.log({
    level: 'info',
    requestId: requestId,
    timestamp: moment().toISOString(),
    log: logObj
  });
}

const warn = (logObj) => {
  let requestSpace = getNamespace('request');
  let requestId = requestSpace.get('requestId');
  console.log({
    level: 'warn',
    requestId: requestId,
    timestamp: moment().toISOString(),
    log: logObj
  });
}

const error = (logObj) => {
  let requestSpace = getNamespace('request');
  let requestId = requestSpace.get('requestId');
  console.log({
    level: 'error',
    requestId: requestId,
    timestamp: moment().toISOString(),
    log: logObj
  });
}

export default {
  info,
  warn,
  error
}