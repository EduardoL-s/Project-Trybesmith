import usersModel from '../models/users.model';
import generateToken from '../utils/auth';

async function loginAuthenticate(username: string, password: string) {
  const [checkUsername] = await usersModel.findByUsername(username, password);

  if (!checkUsername) {
    return { status: 401, message: { message: 'Username or password invalid' } };
  }

  const tokenGen = generateToken(checkUsername.id, checkUsername.username);
  return { status: 200, message: { token: tokenGen } };
}

export default { loginAuthenticate };