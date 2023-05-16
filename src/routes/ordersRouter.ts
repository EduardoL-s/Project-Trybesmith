import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';
import { authToken, productsIdsBodyValidations } from '../middlewares/orders.middlewares';

const ordersRouter = Router();

ordersRouter.get('/', ordersControllers.getAll);
ordersRouter.post('/', authToken, productsIdsBodyValidations, ordersControllers.insertOrder);

export default ordersRouter;