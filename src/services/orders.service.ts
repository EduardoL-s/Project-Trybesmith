import ordersModel from '../models/orders.model';

async function getAll() {
  const orders = await ordersModel.getAll();
  return orders;
}

export default { getAll };