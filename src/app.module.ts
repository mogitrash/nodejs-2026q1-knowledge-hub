import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleApiModule } from './article/article-api.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, ArticleApiModule, CategoryModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
