import { query, validationResult } from 'express-validator/check';

import errorResponse from '../utils/errorResponse';
import postsService from '../services/postsService';
import logger from '../utils/logger';

const getPosts = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    logger.error(errors.array());
    return errorResponse.sendValidationErrorResponse(res, errors.array());
  }

  try {
    let getPostsResult = await postsService.getPosts(req.query.userId);
    return res.status(200).send(getPostsResult);
  } catch(error) {
    if(error) {
      errorResponse.sendInternalServerErrorResponse(res, 'Failed to retrieve posts', error);
    } else {
      errorResponse.sendInternalServerErrorResponse(res, 'Failed to retrieve posts', '');
    }
  }
}

const validateGetPostsRequest = () => {
  return [
    query('userId').optional().isInt().withMessage('should be integer')
  ]
}

export default {
  getPosts,
  validateGetPostsRequest
}