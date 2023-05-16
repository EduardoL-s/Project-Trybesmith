import { Request, Response } from 'express';
import usersService from '../services/users.service';

async function newUser(req: Request, res: Response) {
  const { body } = req;
  const result = await usersService.newUser(body);
  return res.status(201).json({ token: result });
}

export default { newUser };