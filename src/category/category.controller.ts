import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IdParamsDto } from 'src/shared/dto';
import { Response } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: IdParamsDto) {
    return this.categoryService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: IdParamsDto,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(params.id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param() params: IdParamsDto, @Res() res: Response) {
    this.categoryService.remove(params.id);

    res.status(HttpStatus.NO_CONTENT).send();
  }
}
