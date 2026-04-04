import { forwardRef, Module } from '@nestjs/common';
import { ArticleModule } from 'src/article/article.module';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';

@Module({
  imports: [forwardRef(() => ArticleModule)],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
