import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';

const usersRouter = Router();

usersRouter.post('/', usersControllers.newUser);

export default usersRouter;