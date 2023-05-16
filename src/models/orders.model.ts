import { RowDataPacket } from 'mysql2';
import { Orders } from '../types/orders';
import connection from './connection';

async function getAll(): Promise<Orders[]> {
  const [ordersRow] = await connection.execute<RowDataPacket[]>(`
  SELECT orders.id, orders.user_id AS userId,
  JSON_ARRAYAGG(products.id) AS productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON products.order_id = orders.id
  GROUP BY orders.id
  `);
  return ordersRow as Orders[];
}

export default { getAll };