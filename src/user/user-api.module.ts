import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { ArticleModule } from 'src/article/article.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [UserModule, ArticleModule, CommentModule],
  providers: [DeleteUserUseCase],
})
export class UserApiModule {}
