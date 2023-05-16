import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(req: Request, res: Response) {
  const result = await ordersService.getAll();
  return res.status(200).json(result);
}

export default { getAll };