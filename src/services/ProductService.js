import { databaseService } from './Database';
class ProductService {
  constructor() {
    this.database = databaseService;
  }
  createProduct(body) {
    return this.database.create('items', body);
  }

  getProducts() {
    console.log('GET');
    return this.database.read('items');
  }

  deleteProduct(id) {
    return this.database.delete('items', id);
  }

  updateProduct(id, body) {
    return this.database.update('items', id, body);
  }
}

export const productService = new ProductService();
