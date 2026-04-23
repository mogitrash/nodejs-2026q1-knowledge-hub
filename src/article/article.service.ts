import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleStatus } from './entities/article.entity';
import { QueryParamsDto } from './dto/query-params.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Prisma } from 'generated/prisma/client';
import { $Enums } from 'generated/prisma/client';
import { NotFoundError } from 'src/shared/errors/not-found.error';

type ArticleWithTags = Prisma.ArticleGetPayload<{ include: { tags: true } }>;

@Injectable()
export class ArticleService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const nowInMilliseconds = BigInt(Date.now());
    const tagNames = createArticleDto.tags ?? [];

    const article = await this._prismaService.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        status: this._toPrismaStatus(createArticleDto.status),
        authorId: createArticleDto.authorId ?? null,
        categoryId: createArticleDto.categoryId ?? null,
        tags: {
          connectOrCreate: tagNames.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
        createdAt: nowInMilliseconds,
        updatedAt: nowInMilliseconds,
      },
      include: { tags: true },
    });

    return this._toArticleEntity(article);
  }

  async findAll(queryParams: QueryParamsDto): Promise<Article[]> {
    const where: Prisma.ArticleWhereInput = {
      status: queryParams.status
        ? this._toPrismaStatus(queryParams.status)
        : undefined,
      categoryId: queryParams.categoryId,
      ...(queryParams.tag ? { tags: { some: { name: queryParams.tag } } } : {}),
    };

    const articles = await this._prismaService.article.findMany({
      where,
      include: { tags: true },
    });

    return articles.map((article) => this._toArticleEntity(article));
  }

  async findOne(id: string): Promise<Article> {
    const article = await this._prismaService.article.findUnique({
      where: { id },
      include: { tags: true },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    return this._toArticleEntity(article);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    const article = await this._prismaService.article.findUnique({
      where: { id },
      include: { tags: true },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    const { tags: nextTagNames, ...scalarFields } = updateArticleDto;
    const { status, ...restScalarFields } = scalarFields;

    const data: Prisma.ArticleUpdateInput = {
      ...restScalarFields,
      status: status ? this._toPrismaStatus(status) : undefined,
      updatedAt: BigInt(Date.now()),
    };

    if (nextTagNames !== undefined) {
      data.tags = {
        disconnect: article.tags.map((t) => ({ id: t.id })),
        connectOrCreate: nextTagNames.map((name) => ({
          where: { name },
          create: { name },
        })),
      };
    }

    const updatedArticle = await this._prismaService.article.update({
      where: { id },
      data,
      include: { tags: true },
    });

    return this._toArticleEntity(updatedArticle);
  }

  async remove(id: string): Promise<void> {
    const article = await this._prismaService.article.findUnique({
      where: { id },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    await this._prismaService.article.delete({
      where: { id },
    });
  }

  private _toArticleEntity(article: ArticleWithTags): Article {
    return {
      id: article.id,
      title: article.title,
      content: article.content,
      status: this._toEntityStatus(article.status),
      authorId: article.authorId,
      categoryId: article.categoryId,
      tags: article.tags.map((t) => t.name),
      createdAt: Number(article.createdAt),
      updatedAt: Number(article.updatedAt),
    };
  }

  private _toPrismaStatus(status?: ArticleStatus): $Enums.ArticleStatus {
    if (!status) {
      return $Enums.ArticleStatus.DRAFT;
    }

    if (status === ArticleStatus.PUBLISHED) {
      return $Enums.ArticleStatus.PUBLISHED;
    }

    if (status === ArticleStatus.ARCHIVED) {
      return $Enums.ArticleStatus.ARCHIVED;
    }

    return $Enums.ArticleStatus.DRAFT;
  }

  private _toEntityStatus(status: $Enums.ArticleStatus): ArticleStatus {
    if (status === $Enums.ArticleStatus.PUBLISHED) {
      return ArticleStatus.PUBLISHED;
    }

    if (status === $Enums.ArticleStatus.ARCHIVED) {
      return ArticleStatus.ARCHIVED;
    }

    return ArticleStatus.DRAFT;
  }
}
