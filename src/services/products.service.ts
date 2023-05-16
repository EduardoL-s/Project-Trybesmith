import productsModel from '../models/products.model';

async function getAll() {
  const products = await productsModel.getAll();
  return products;
}

export default { getAll };