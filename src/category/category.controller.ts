import {
  Controller,
  Get,
  Post,
  Body,
  Put,
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
import { RemoveCategoryUseCase } from './use-cases/remove-category.use-case';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly removeCategoryUseCase: RemoveCategoryUseCase,
  ) {}

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

  @Put(':id')
  update(
    @Param() params: IdParamsDto,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(params.id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param() params: IdParamsDto, @Res() res: Response) {
    await this.removeCategoryUseCase.execute(params.id);

    res.status(HttpStatus.NO_CONTENT).send();
  }
}
