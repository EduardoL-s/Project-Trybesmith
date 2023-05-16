import jwt, { SignOptions } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET as string;
const configJWT: SignOptions = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = (id: number, username: string) => {
  const payload = { id, username };
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

export default generateToken;