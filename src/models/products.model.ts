import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { Products } from '../types/products';
import connection from './connection';

async function getAll(): Promise<Products[]> {
  const [productsRows] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.products;
  `);
  return productsRows as Products[];
}

async function insertProduct(name: string, amount: string): Promise<Products> {
  const [productInserted] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) values (?, ?)
  `, [name, amount]);
  
  const newProduct = {
    id: productInserted.insertId,
    name,
    amount,
  };
  return newProduct as Products;
}

async function updateProduct(orderId: number, id: number) {
  const result = await connection
    .execute<OkPacket>('UPDATE Trybesmith.products SET order_id = ? WHERE id = ?', [orderId, id]);
  return result;
}

export default { getAll, insertProduct, updateProduct };