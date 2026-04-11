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
import { toUserResponseDto } from './dto/user-response.dto';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return toUserResponseDto(user);
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users.map(toUserResponseDto);
  }

  @Get(':id')
  async findOne(@Param() params: IdParamsDto) {
    const user = await this.userService.findOne(params.id);
    return toUserResponseDto(user);
  }

  @Put(':id')
  async update(
    @Param() params: IdParamsDto,
    @Body() updateDto: UpdatePasswordDto,
  ) {
    const user = await this.userService.update(params.id, updateDto);
    return toUserResponseDto(user);
  }

  @Delete(':id')
  async remove(@Param() params: IdParamsDto, @Res() res: Response) {
    await this.deleteUserUseCase.execute(params.id);
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
