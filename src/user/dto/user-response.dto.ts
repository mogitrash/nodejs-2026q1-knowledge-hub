import { User } from '../entities';

export type UserResponseDto = Omit<User, 'password'> & { password?: never };

export function toUserResponseDto(user: User): UserResponseDto {
  const { password, ...rest } = user;
  void password;
  return rest;
}
