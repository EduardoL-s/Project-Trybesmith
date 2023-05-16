import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import { validateToken } from '../utils/auth';

async function getAll(req: Request, res: Response) {
  const result = await ordersService.getAll();
  return res.status(200).json(result);
}

async function insertOrder(req: Request, res: Response) {
  const { authorization } = req.headers;

  if (authorization) {
    const { id: userId } = validateToken(authorization);

    const { productsIds } = req.body;
    
    await ordersService.insertOrder(userId, productsIds);
    return res.status(201).json({ userId, productsIds });
  }
}

export default { getAll, insertOrder };