import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleApiModule } from './article/article-api.module';
import { CategoryApiModule } from './category/category-api.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserApiModule } from './user/user-api.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    UserApiModule,
    ArticleApiModule,
    CategoryApiModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
