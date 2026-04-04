import { User, UserRole } from '../entities';

export class UserResponseDto {
  id: string;
  login: string;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
}

export function toUserResponseDto(user: User): UserResponseDto {
  const { password, ...rest } = user;
  void password;
  return rest;
}
