import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const result = await loginService.loginAuthenticate(username, password);
  return res.status(result.status).json(result.message);
}

export default { login };