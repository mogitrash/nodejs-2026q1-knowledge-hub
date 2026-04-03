import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { IdParamsDto } from 'src/shared/dto/id.dto';
import { QueryParamsDto } from './dto/query-params.dto';
import { Response } from 'express';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryParamsDto) {
    return this.articleService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param() params: IdParamsDto) {
    return this.articleService.findOne(params.id);
  }

  @Put(':id')
  update(
    @Param() params: IdParamsDto,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(params.id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param() params: IdParamsDto, @Res() res: Response) {
    this.articleService.remove(params.id);

    res.status(HttpStatus.NO_CONTENT).send();
  }
}
