import axios from 'axios';

const getPosts = async (userId) => {
  return new Promise(async (resolve, reject) => {
      
    try {
      let getPostsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: userId ? userId : null
        }
      });

      if(getPostsResponse && getPostsResponse.data) {
        resolve(getPostsResponse.data);
      } else {
        resolve({});
      }
    } catch(error) {
      resolve({});
    }
  })
}

export default {
    getPosts
}