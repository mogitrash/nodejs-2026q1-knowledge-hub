import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdatePasswordDto } from './dto';
import { IdParamsDto } from '../shared/dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: IdParamsDto) {
    return this.userService.findOne(params.id);
  }

  @Put(':id')
  update(@Param() params: IdParamsDto, @Body() updateDto: UpdatePasswordDto) {
    return this.userService.update(params.id, updateDto);
  }

  @Delete(':id')
  remove(@Param() params: IdParamsDto, @Res() res: Response) {
    this.userService.remove(params.id);

    res.status(HttpStatus.NO_CONTENT).send();
  }
}
