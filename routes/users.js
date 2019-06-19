import { Router } from 'express';
import UsersController from '../controllers/usersController';
import usersController from '../controllers/usersController';

const router = Router();

router.get('/', UsersController.getUsers);
router.get('/:userId', usersController.getUserById);

export default router;