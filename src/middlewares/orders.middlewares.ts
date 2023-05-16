import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../utils/auth';

function authToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    validateToken(authorization);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function productsIdsBodyValidations(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
    
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
    
  if (productsIds.length === 0) {
    return res.status(422)
      .json({ message: '"productsIds" must include only numbers' });
  }

  next();
}

export { authToken, productsIdsBodyValidations };