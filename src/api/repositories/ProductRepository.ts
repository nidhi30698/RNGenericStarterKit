import { Product } from '../../types/Product';
import { ProductEndpoints } from '../endpoints/products';

export class ProductRepository {
  async getAll(): Promise<Product[]> {
    const res = await ProductEndpoints.getAll();
    return res.data;
  }

  async getById(id: number): Promise<Product> {
    const res = await ProductEndpoints.getById(id);
    return res.data;
  }

  async create(data: Product): Promise<Product> {
    const res = await ProductEndpoints.create(data);
    return res.data;
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    const res = await ProductEndpoints.update(id, data);
    return res.data;
  }

  async delete(id: number): Promise<void> {
    await ProductEndpoints.delete(id);
  }
}
