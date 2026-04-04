import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleStatus } from './entities/article.entity';
import { QueryParamsDto } from './dto/query-params.dto';
import { CommentService } from 'src/comment/comment.service';

@Injectable()
export class ArticleService {
  private _articles: Article[] = [];

  constructor(
    @Inject(forwardRef(() => CommentService))
    private readonly _commentService: CommentService,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    const newArticle: Article = {
      id: crypto.randomUUID(),
      title: createArticleDto.title,
      content: createArticleDto.content,
      status: createArticleDto.status ?? ArticleStatus.DRAFT,
      authorId: createArticleDto.authorId ?? null,
      categoryId: createArticleDto.categoryId ?? null,
      tags: createArticleDto.tags ?? [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    this._articles.push(newArticle);

    return newArticle;
  }

  findAll(queryParams: QueryParamsDto): Article[] {
    const { status, categoryId, tag } = queryParams;
    let articles = this._articles;

    if (status) {
      articles = articles.filter((article) => article.status === status);
    }

    if (categoryId) {
      articles = articles.filter(
        (article) => article.categoryId === categoryId,
      );
    }

    if (tag) {
      articles = articles.filter((article) => article.tags.includes(tag));
    }

    return articles;
  }

  findOne(id: string) {
    const article = this._articles.find((article) => article.id === id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    const article = this._articles.find((article) => article.id === id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    const updatedArticle: Article = {
      ...article,
      ...updateArticleDto,
      updatedAt: Date.now(),
    };

    this._articles = this._articles.map((article) =>
      article.id === id ? updatedArticle : article,
    );

    return updatedArticle;
  }

  remove(id: string) {
    const article = this._articles.find((article) => article.id === id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    this._articles = this._articles.filter((article) => article.id !== id);
    this._commentService.removeAllByArticleId(id);

    return;
  }

  removeAuthor(authorId: string) {
    const now = Date.now();
    this._articles = this._articles.map((article) =>
      article.authorId === authorId
        ? { ...article, authorId: null, updatedAt: now }
        : article,
    );

    return;
  }

  removeCategory(categoryId: string) {
    this._articles = this._articles.map((article) =>
      article.categoryId === categoryId
        ? { ...article, categoryId: null }
        : article,
    );

    return;
  }
}
