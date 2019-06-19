import _ from 'lodash';

const retrieveUsersList = () => {
  return [
    {
      userId: 'user0001',
      username: 'Test User 1'
    },
    {
      userId: 'user0002',
      username: 'Test User 2'
    },
    {
      userId: 'user0003',
      username: 'Test User 3'
    }
  ]
}

const retrieveUserById = (userId) => {
  let usersList = retrieveUsersList();
  if(usersList && usersList.length > 0) {
    return _.filter(usersList, (user) => {
      if (user.userId == userId) return true;
      else return false;
    })
  } else {
    return {};
  }
}

export default {
  retrieveUsersList,
  retrieveUserById
}