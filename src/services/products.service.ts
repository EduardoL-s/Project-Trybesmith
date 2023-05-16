import productsModel from '../models/products.model';

async function getAll() {
  const products = await productsModel.getAll();
  return products;
}

async function insertProduct(name: string, amount: string) {
  const product = productsModel.insertProduct(name, amount);
  return product;
}

async function updateProducts(orderId: number, idProduct: number[]) {
  const result = await Promise.all(idProduct
    .map((id) => productsModel.updateProduct(orderId, id)));

  return result;
}

export default { getAll, insertProduct, updateProducts };