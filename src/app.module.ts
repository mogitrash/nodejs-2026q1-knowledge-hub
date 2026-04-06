import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleApiModule } from './article/article-api.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { UserApiModule } from './user/user-api.module';

@Module({
  imports: [UserApiModule, ArticleApiModule, CategoryModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
