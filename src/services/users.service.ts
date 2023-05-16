import usersModel from '../models/users.model';
import { Users } from '../types/users';
import { generateToken } from '../utils/auth';

async function newUser(body: Users) {
  const user = await usersModel.insertNewUser(body);
  const token = generateToken(user.id, user.username);
  return token;
}

export default { newUser };