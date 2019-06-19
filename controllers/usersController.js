import logger from '../utils/logger';
import usersService from '../services/usersService';

const getUsers = async (req, res) => {
  logger.info('Start retrieving users list');
  let usersList = usersService.retrieveUsersList();
  return res.status(200).send(usersList);
}

const getUserById = async (req, res) => {
  let userId = req.params.userId;
  logger.info('Start retrieve user by ID: ' + userId);
  let user = usersService.retrieveUserById(userId);
  if(user && user.length > 0) {
    logger.info('Successfully retrieve user with ID: ' + userId);
    return res.status(200).send(user[0]);
  } else {
    logger.info('Cannot find user with ID: ' + userId);
    return res.status(200).send({
      message: 'User not found'
    })
  }
}

export default {
  getUsers,
  getUserById
}