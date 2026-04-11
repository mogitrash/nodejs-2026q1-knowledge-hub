import { Injectable } from '@nestjs/common';
import { CategoryService } from '../category.service';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class RemoveCategoryUseCase {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly articleService: ArticleService,
  ) {}

  async execute(categoryId: string): Promise<void> {
    await this.articleService.removeCategory(categoryId);
    await this.categoryService.remove(categoryId);
  }
}
