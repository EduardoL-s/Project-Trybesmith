import { Router } from 'express';
import productsControllers from '../controllers/products.controllers';

const productsRouter = Router();

productsRouter.get('/', productsControllers.getAll);
productsRouter.post('/', productsControllers.insertProduct);

export default productsRouter;