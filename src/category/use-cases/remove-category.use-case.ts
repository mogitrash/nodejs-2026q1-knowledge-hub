import { Injectable } from '@nestjs/common';
import { CategoryService } from '../category.service';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class RemoveCategoryUseCase {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly articleService: ArticleService,
  ) {}

  execute(categoryId: string) {
    this.categoryService.remove(categoryId);
    this.articleService.removeCategory(categoryId);

    return;
  }
}
