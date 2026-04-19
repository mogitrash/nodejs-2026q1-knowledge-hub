import { Injectable } from '@nestjs/common';
import { CategoryService } from '../category.service';

@Injectable()
export class RemoveCategoryUseCase {
  constructor(private readonly categoryService: CategoryService) {}

  async execute(categoryId: string): Promise<void> {
    await this.categoryService.remove(categoryId);
  }
}
