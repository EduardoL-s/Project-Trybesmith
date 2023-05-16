import { Router } from 'express';
import loginControllers from '../controllers/login.controllers';
import loginBodyVerifications from '../middlewares/login.middlewares';

const loginRouter = Router();

loginRouter.post('/', loginBodyVerifications, loginControllers.login);

export default loginRouter;