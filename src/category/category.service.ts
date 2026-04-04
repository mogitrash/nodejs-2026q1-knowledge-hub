import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class CategoryService {
  private _categories: Category[] = [];

  constructor(
    @Inject(forwardRef(() => ArticleService))
    private readonly _articleService: ArticleService,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const newCategory: Category = {
      id: crypto.randomUUID(),
      name: createCategoryDto.name,
      description: createCategoryDto.description,
    };

    this._categories.push(newCategory);

    return newCategory;
  }

  findAll() {
    return this._categories;
  }

  findOne(id: string) {
    const category = this._categories.find((category) => category.id === id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this._categories.find((category) => category.id === id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = this._categories.find((category) => category.id === id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const updatedCategory: Category = {
      ...category,
      ...updateCategoryDto,
    };

    this._categories = this._categories.map((category) =>
      category.id === id ? updatedCategory : category,
    );

    return updatedCategory;
  }

  remove(id: string) {
    const category = this._categories.find((category) => category.id === id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    this._categories = this._categories.filter(
      (category) => category.id !== id,
    );

    this._articleService.removeCategory(id);

    return;
  }
}
