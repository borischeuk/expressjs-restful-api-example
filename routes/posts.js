import { Router } from 'express';
import PostsController from '../controllers/postsController';

const router = Router();

router.get('/', PostsController.validateGetPostsRequest(), PostsController.getPosts);

export default router;