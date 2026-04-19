import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
