import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import type { SignOptions } from 'jsonwebtoken';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env['JWT_SECRET_KEY'],
      signOptions: {
        expiresIn: process.env['TOKEN_EXPIRE_TIME'] as SignOptions['expiresIn'],
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
