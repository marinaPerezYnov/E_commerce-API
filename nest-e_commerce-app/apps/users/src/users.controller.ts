import { Controller, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('users')
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Supprimer un produit
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('user/:id')
  @UseGuards(JwtAuthGuard)
  deleteProduit(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
