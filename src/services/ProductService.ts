import { ProductRepository } from "../api/repositories/ProductRepository";
import { Product } from "../types/Product";

const productRepo = new ProductRepository();

export class ProductService {
  static getAllProducts(): Promise<Product[]> {
    return productRepo.getAll();
  }

  static getProductById(id: number): Promise<Product> {
    return productRepo.getById(id);
  }

  static createProduct(data: Product): Promise<Product> {
    return productRepo.create(data);
  }

  static updateProduct(id: number, data: Partial<Product>): Promise<Product> {
    return productRepo.update(id, data);
  }

  static deleteProduct(id: number): Promise<void> {
    return productRepo.delete(id);
  }
}
