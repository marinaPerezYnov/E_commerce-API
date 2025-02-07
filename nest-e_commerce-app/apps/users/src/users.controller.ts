import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Supprimer un produit
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('user/:id')
  deleteProduit(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
