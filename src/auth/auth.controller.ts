import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RefreshDto, SignupDto } from './dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupDto: SignupDto, @Res() res: Response) {
    await this.authService.signup(signupDto);
    res.status(HttpStatus.CREATED).send();
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: RefreshDto) {
    return await this.authService.refresh(refreshDto);
  }
}
