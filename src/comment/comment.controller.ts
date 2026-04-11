import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { IdParamsDto } from 'src/shared/dto';
import { FindAllQueryParamsDto } from './dto/find-all-query-params.dto';
import { Response } from 'express';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll(@Query() queryParams: FindAllQueryParamsDto) {
    return this.commentService.findAll(queryParams.articleId);
  }

  @Get(':id')
  async findOne(@Param() params: IdParamsDto) {
    const comment = await this.commentService.findOne(params.id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    return comment;
  }

  @Delete(':id')
  async remove(@Param() params: IdParamsDto, @Res() res: Response) {
    await this.commentService.remove(params.id);

    res.status(HttpStatus.NO_CONTENT).send();
  }
}
