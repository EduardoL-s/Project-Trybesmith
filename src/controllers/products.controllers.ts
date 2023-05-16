import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAll(req: Request, res: Response) {
  const result = await productsService.getAll();
  return res.status(200).json(result);
}

async function insertProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await productsService.insertProduct(name, amount);
  return res.status(201).json(result);
}

export default { getAll, insertProduct };