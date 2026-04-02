import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { User, UserRole } from './entities';
import { CreateUserDto, UpdatePasswordDto } from './dto';
import { toUserResponseDto, UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UserService {
  private _users: User[] = [];

  create(createUserDto: CreateUserDto): UserResponseDto {
    const newUser: User = {
      id: crypto.randomUUID(),
      login: createUserDto.login,
      password: createUserDto.password,
      role: createUserDto.role ?? UserRole.VIEWER,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    this._users.push(newUser);

    return toUserResponseDto(newUser);
  }

  findAll(): UserResponseDto[] {
    return this._users.map(toUserResponseDto);
  }

  findOne(id: string): UserResponseDto {
    const user = this._users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return toUserResponseDto(user);
  }

  update(id: string, updateDto: UpdatePasswordDto) {
    const user = this._users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== updateDto.oldPassword) {
      throw new ForbiddenException('Invalid old password');
    }

    user.password = updateDto.newPassword;
    user.updatedAt = Date.now();

    return toUserResponseDto(user);
  }

  remove(id: string) {
    const user = this._users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    this._users = this._users.filter((user) => user.id !== id);

    return;
  }
}
