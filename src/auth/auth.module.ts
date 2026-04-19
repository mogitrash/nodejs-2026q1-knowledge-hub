import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import type { SignOptions } from 'jsonwebtoken';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AccessTokenGuard } from './guards/access-token.guard';

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
  providers: [
    AuthService,
    AccessTokenGuard,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AuthModule {}
