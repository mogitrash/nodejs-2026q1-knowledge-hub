import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { UserController } from './user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [DeleteUserUseCase],
})
export class UserApiModule {}
