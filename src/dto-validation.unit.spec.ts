import { validate } from 'class-validator';
import { describe, expect, it } from 'vitest';
import { ArticleStatus } from './article/entities/article.entity';
import { CreateArticleDto } from './article/dto/create-article.dto';
import { SignupDto } from './auth/dto/signup.dto';
import { CreateCommentDto } from './comment/dto/create-comment.dto';
import { IdParamsDto } from './shared/dto/id.dto';

describe('DTO validation', () => {
  it('fails when signup required fields are missing', async () => {
    expect(await validate(new SignupDto())).not.toHaveLength(0);
  });

  it('fails when article status is invalid', async () => {
    const dto = Object.assign(new CreateArticleDto(), {
      title: 'Title',
      content: 'Content',
      status: 'invalid',
    });

    expect(await validate(dto)).not.toHaveLength(0);
  });

  it('passes valid article payload', async () => {
    const dto = Object.assign(new CreateArticleDto(), {
      title: 'Title',
      content: 'Content',
      status: ArticleStatus.DRAFT,
      authorId: '2a99d21c-83cf-4e9f-87ef-83fa7bc1f414',
      categoryId: '18e16e59-e3cb-471d-9882-097c95fb7413',
      tags: ['node'],
    });

    expect(await validate(dto)).toHaveLength(0);
  });

  it('fails when comment articleId is not uuid', async () => {
    const dto = Object.assign(new CreateCommentDto(), {
      content: 'Comment',
      articleId: 'bad-id',
    });

    expect(await validate(dto)).not.toHaveLength(0);
  });

  it('passes valid id params', async () => {
    const dto = Object.assign(new IdParamsDto(), {
      id: '2a99d21c-83cf-4e9f-87ef-83fa7bc1f414',
    });

    expect(await validate(dto)).toHaveLength(0);
  });
});
