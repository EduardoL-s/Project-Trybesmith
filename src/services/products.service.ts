import productsModel from '../models/products.model';

async function getAll() {
  const products = await productsModel.getAll();
  return products;
}

async function insertProduct(name: string, amount: string) {
  const product = productsModel.insertProduct(name, amount);
  return product;
}

export default { getAll, insertProduct };