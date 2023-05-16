import jwt, { SignOptions } from 'jsonwebtoken';
import { Users } from '../types/users';

const secretKey = process.env.JWT_SECRET as string;
const configJWT: SignOptions = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = (payload: Users) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

export default generateToken;