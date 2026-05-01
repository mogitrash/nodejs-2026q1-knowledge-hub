import { Module } from '@nestjs/common';
import { AiRateLimitGuard } from './ai-rate-limit.guard';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AiController],
  providers: [AiService, AiRateLimitGuard],
  imports: [PrismaModule],
})
export class AiModule {}
