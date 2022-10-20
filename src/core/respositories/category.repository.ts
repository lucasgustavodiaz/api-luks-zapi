import { Category } from '../entities/category';
import { Result } from '../types/response';

export default interface CategoryRepository {
  getCategory(): Promise<Result<Category[]>>;
  createCategory(category: string): Promise<Result<Category>>;
}
