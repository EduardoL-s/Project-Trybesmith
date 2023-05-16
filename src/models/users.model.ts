import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Users } from '../types/users';
import connection from './connection';

async function insertNewUser(user: Users): Promise<Users> {
  const { username, vocation, level, password } = user;

  const [userRegistered] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.users (username, vocation, level, password)
  values (?, ?, ?, ?)
  `, [username, vocation, level, password]);

  const newUser = {
    id: userRegistered.insertId,
    username,
    vocation,
    level,
    password,
  };

  return newUser as Users;
}

async function findByUsername(username: string, password: string): Promise<Users[]> {
  const [userRow] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.users
  WHERE username=(?) AND password=(?)
  `, [username, password]);

  return userRow as Users[];
}

export default { insertNewUser, findByUsername };