import { RowDataPacket } from 'mysql2';
import { Products } from '../types/products';
import connection from './connection';

async function getAll(): Promise<Products[]> {
  const [productsRows] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.products;
  `);
  return productsRows as Products[];
}

export default { getAll };