import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';

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

const validateToken = (token: string) => {
  const validated = jwt.verify(token, secretKey);
  return validated as JwtPayload;
};

export { generateToken, validateToken };