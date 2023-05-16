import { Router } from 'express';
import productsControllers from '../controllers/products.controllers';
import { amountBodyValidations, nameBodyValidations } from '../middlewares/products.middlewares';

const productsRouter = Router();

productsRouter.get('/', productsControllers.getAll);
productsRouter.post(
  '/',
  nameBodyValidations,
  amountBodyValidations,
  productsControllers.insertProduct,
);

export default productsRouter;