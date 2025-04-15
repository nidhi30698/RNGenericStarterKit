import { IRepository } from './IRepository';
import { AxiosInstance } from 'axios';

export class GenericRepository<T> implements IRepository<T> {
  constructor(private client: AxiosInstance, private endpoint: string) {}

  async getAll(): Promise<T[]> {
    const res = await this.client.get<T[]>(this.endpoint);
    return res.data;
  }

  async getById(id: number): Promise<T> {
    const res = await this.client.get<T>(`${this.endpoint}/${id}`);
    return res.data;
  }

  async create(data: T): Promise<T> {
    const res = await this.client.post<T>(this.endpoint, data);
    return res.data;
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    const res = await this.client.put<T>(`${this.endpoint}/${id}`, data);
    return res.data;
  }

  async delete(id: number): Promise<void> {
    await this.client.delete(`${this.endpoint}/${id}`);
  }
}
