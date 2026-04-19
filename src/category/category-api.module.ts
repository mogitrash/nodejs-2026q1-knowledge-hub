import { Module } from '@nestjs/common';
import { CategoryModule } from './category.module';
import { CategoryController } from './category.controller';
import { RemoveCategoryUseCase } from './use-cases/remove-category.use-case';

@Module({
  imports: [CategoryModule],
  controllers: [CategoryController],
  providers: [RemoveCategoryUseCase],
})
export class CategoryApiModule {}
