import ordersModel from '../models/orders.model';
import productsService from './products.service';

async function getAll() {
  const orders = await ordersModel.getAll();
  return orders;
}

async function insertOrder(userId: number, productsIds: number[]) {
  const order = await ordersModel.insertNewOrder(userId);

  await productsService.updateProducts(order, productsIds);

  return order;
}

export default { getAll, insertOrder };