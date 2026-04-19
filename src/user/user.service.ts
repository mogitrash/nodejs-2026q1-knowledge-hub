import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateInput } from 'generated/prisma/models';
import { $Enums } from 'generated/prisma/client';
import type { User as PrismaUser } from 'generated/prisma/client';
import { UpdatePasswordDto } from './dto';
import { User, UserRole } from './entities';

@Injectable()
export class UserService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const nowInMilliseconds = BigInt(Date.now());
    const userInput: UserCreateInput = {
      login: createUserDto.login,
      password: createUserDto.password,
      role: $Enums.UserRole.VIEWER,
      createdAt: nowInMilliseconds,
      updatedAt: nowInMilliseconds,
    };

    const user = await this._prismaService.user.create({
      data: userInput,
    });

    return this._toUserEntity(user);
  }

  async findAll(): Promise<User[]> {
    const users = await this._prismaService.user.findMany();
    return users.map((user) => this._toUserEntity(user));
  }

  async findOne(id: string): Promise<User> {
    const user = await this._prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this._toUserEntity(user);
  }

  async update(id: string, updateDto: UpdatePasswordDto): Promise<User> {
    const user = await this._prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== updateDto.oldPassword) {
      throw new ForbiddenException('Invalid old password');
    }

    const updatedUser = await this._prismaService.user.update({
      where: { id },
      data: {
        password: updateDto.newPassword,
        updatedAt: BigInt(Date.now()),
      },
    });

    return this._toUserEntity(updatedUser);
  }

  async remove(id: string): Promise<void> {
    const user = await this._prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this._prismaService.user.delete({
      where: { id },
    });
  }

  private _toUserEntity(user: PrismaUser): User {
    return {
      id: user.id,
      login: user.login,
      password: user.password,
      role: user.role.toLowerCase() as UserRole,
      createdAt: Number(user.createdAt),
      updatedAt: Number(user.updatedAt),
    };
  }
}
