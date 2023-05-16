import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';
import {
  levelBodyValidations,
  passwordBodyValidations,
  usernameBodyValidations,
  vocationBodyValidations,
} from '../middlewares/users.middlewares';

const usersRouter = Router();

usersRouter.post(
  '/',
  usernameBodyValidations,
  vocationBodyValidations,
  levelBodyValidations,
  passwordBodyValidations,
  usersControllers.newUser,
);

export default usersRouter;