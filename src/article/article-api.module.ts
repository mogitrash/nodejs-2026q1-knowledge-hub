import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleModule } from './article.module';
import { CommentModule } from 'src/comment/comment.module';
import { DeleteArticleUseCase } from './use-cases/delete-article.use-case';

@Module({
  imports: [ArticleModule, CommentModule],
  controllers: [ArticleController],
  providers: [DeleteArticleUseCase],
})
export class ArticleApiModule {}
