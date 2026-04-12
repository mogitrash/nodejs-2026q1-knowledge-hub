import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(userId: string): Promise<void> {
    await this.userService.remove(userId);
  }
}
