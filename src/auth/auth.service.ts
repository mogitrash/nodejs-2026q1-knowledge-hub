import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RefreshDto, SignupDto } from './dto';
import type { SignOptions } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities';

const jwtRefreshSecret = process.env['JWT_SECRET_REFRESH_KEY'];
const jwtRefreshExpires = process.env['TOKEN_REFRESH_EXPIRE_TIME'];
const jwtSecret = process.env['JWT_SECRET_KEY'];
const jwtExpires = process.env['TOKEN_EXPIRE_TIME'];

type JwtPayload = {
  userId: string;
  login: string;
  role: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const { login, password } = signupDto;

    try {
      await this.userService.findByLogin(login);
      throw new BadRequestException('User already exists');
    } catch (error) {
      if (!(error instanceof NotFoundException)) {
        throw error;
      }
    }

    await this.userService.create({ login, password });

    return { message: 'User created successfully' };
  }

  async login(loginDto: LoginDto) {
    const { login, password } = loginDto;

    let user: User | null = null;
    try {
      user = await this.userService.findByLogin(login);
    } catch {
      throw new ForbiddenException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ForbiddenException('Invalid credentials');
    }

    return this._issueTokens({
      userId: user.id,
      login: user.login,
      role: user.role,
    });
  }

  async refresh(refreshDto: RefreshDto) {
    const { refreshToken } = refreshDto;

    let payload: JwtPayload;
    try {
      payload = await this.jwtService.verifyAsync<JwtPayload>(refreshToken, {
        secret: jwtRefreshSecret,
      });
    } catch {
      throw new ForbiddenException('Invalid refresh token');
    }

    const user = await this.userService.findByLogin(payload.login);

    return this._issueTokens({
      userId: user.id,
      login: user.login,
      role: user.role,
    });
  }

  private async _issueTokens(payload: JwtPayload) {
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: jwtSecret,
        expiresIn: jwtExpires as SignOptions['expiresIn'],
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        secret: jwtRefreshSecret,
        expiresIn: jwtRefreshExpires as SignOptions['expiresIn'],
      }),
    };
  }
}
