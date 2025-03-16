import { Controller, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Delete, HttpCode, HttpStatus, Param, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';
import { Body, Put } from '@nestjs/common';
import { ChangePasswordDto } from './../dto/change-password.dto';
import { UpdateEmailDto } from './../dto/update-email.dto';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Récupérer les données d'un utilisateur
   */
  @HttpCode(HttpStatus.OK)
  @Get('user/:id')
  @UseGuards(JwtAuthGuard)
  getProduit(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }

  /**
   * Supprimer un produit
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('user/:id')
  @UseGuards(JwtAuthGuard)
  deleteProduit(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  /**
   * Changer le mot de passe
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id/change-password')
  @UseGuards(JwtAuthGuard)
  changePassword(
    @Param('id') id: number,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(id, changePasswordDto);
  }

  /**
   * Mettre à jour l'email
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id/update-email')
  @UseGuards(JwtAuthGuard)
  updateEmail(@Param('id') id: number, @Body() updateEmailDto: UpdateEmailDto) {
    return this.usersService.updateEmail(id, updateEmailDto);
  }
}
