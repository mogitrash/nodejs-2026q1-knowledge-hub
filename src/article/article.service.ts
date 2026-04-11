import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleStatus } from './entities/article.entity';
import { QueryParamsDto } from './dto/query-params.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Article as PrismaArticle, Prisma } from 'generated/prisma/client';
import { $Enums } from 'generated/prisma/client';

@Injectable()
export class ArticleService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const nowInMilliseconds = BigInt(Date.now());

    const article = await this._prismaService.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        status: createArticleDto.status ?? $Enums.ArticleStatus.draft,
        authorId: createArticleDto.authorId ?? null,
        categoryId: createArticleDto.categoryId ?? null,
        tags: createArticleDto.tags ?? [],
        createdAt: nowInMilliseconds,
        updatedAt: nowInMilliseconds,
      },
    });

    return this._toArticleEntity(article);
  }

  async findAll(queryParams: QueryParamsDto): Promise<Article[]> {
    const where: Prisma.ArticleWhereInput = {
      status: queryParams.status,
      categoryId: queryParams.categoryId,
      ...(queryParams.tag ? { tags: { has: queryParams.tag } } : {}),
    };

    const articles = await this._prismaService.article.findMany({
      where,
    });

    return articles.map((article) => this._toArticleEntity(article));
  }

  async findOne(id: string): Promise<Article> {
    const article = await this._prismaService.article.findUnique({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return this._toArticleEntity(article);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    const article = await this._prismaService.article.findUnique({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    const updatedArticle = await this._prismaService.article.update({
      where: { id },
      data: {
        ...updateArticleDto,
        updatedAt: BigInt(Date.now()),
      },
    });

    return this._toArticleEntity(updatedArticle);
  }

  async remove(id: string): Promise<void> {
    const article = await this._prismaService.article.findUnique({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    await this._prismaService.article.delete({
      where: { id },
    });
  }

  async removeAuthor(authorId: string): Promise<void> {
    await this._prismaService.article.updateMany({
      where: {
        authorId,
      },
      data: {
        authorId: null,
        updatedAt: BigInt(Date.now()),
      },
    });
  }

  async removeCategory(categoryId: string): Promise<void> {
    await this._prismaService.article.updateMany({
      where: {
        categoryId,
      },
      data: {
        categoryId: null,
      },
    });
  }

  private _toArticleEntity(article: PrismaArticle): Article {
    return {
      id: article.id,
      title: article.title,
      content: article.content,
      status: article.status as ArticleStatus,
      authorId: article.authorId,
      categoryId: article.categoryId,
      tags: article.tags,
      createdAt: Number(article.createdAt),
      updatedAt: Number(article.updatedAt),
    };
  }
}
