import { databaseService } from './Database';
class OrderService {
  constructor() {
    this.database = databaseService;
  }
  createOrder(body) {
    return this.database.create('orders', body);
  }

  getOrder() {
    return this.database.read('orders');
  }

  deleteOrder(id) {
    return this.database.delete('orders', id);
  }
}

export const orderService = new OrderService();
