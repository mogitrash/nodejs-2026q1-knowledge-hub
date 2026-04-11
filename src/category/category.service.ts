import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Category as PrismaCategory } from 'generated/prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this._prismaService.category.create({
      data: {
        name: createCategoryDto.name,
        description: createCategoryDto.description,
      },
    });

    return this._toCategoryEntity(category);
  }

  async findAll(): Promise<Category[]> {
    const categories = await this._prismaService.category.findMany();
    return categories.map((category) => this._toCategoryEntity(category));
  }

  async findOne(id: string): Promise<Category> {
    const category = await this._prismaService.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this._toCategoryEntity(category);
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this._prismaService.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const updatedCategory = await this._prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });

    return this._toCategoryEntity(updatedCategory);
  }

  async remove(id: string): Promise<void> {
    const category = await this._prismaService.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this._prismaService.category.delete({
      where: { id },
    });
  }

  private _toCategoryEntity(category: PrismaCategory): Category {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
    };
  }
}
