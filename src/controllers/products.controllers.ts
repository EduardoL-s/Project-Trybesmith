import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAll(req: Request, res: Response) {
  const result = await productsService.getAll();
  return res.status(200).json(result);
}

export default { getAll };