import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import {
  emailValidator,
  passwordValidator,
  numberValidator,
} from '../../utils/validators';
import {
  passwordErrorText,
  emailErrorText,
  numberErrorText,
} from 'apps/utils/text';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { UpdateEmailDto } from '../dto/update-email.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | null> {
    const validEmail = emailValidator(email, emailErrorText);
    if (!validEmail) {
      throw new BadRequestException(emailErrorText);
    }

    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async create(email: string, password: string): Promise<User | string> {
    const validEmail = emailValidator(email, emailErrorText);
    const validPassword = passwordValidator(password, passwordErrorText);

    if (!validEmail) {
      throw new BadRequestException(emailErrorText);
    }
    if (!validPassword) {
      throw new BadRequestException(passwordErrorText);
    }

    const newUser = this.usersRepository.create({ email, password });
    return this.usersRepository.save(newUser);
  }

  async remove(id: number): Promise<void> {
    const validId = numberValidator(id, numberErrorText);
    if (!validId) {
      throw new BadRequestException(numberErrorText);
    }

    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async changePassword(
    id: number,
    changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    if (user.password !== changePasswordDto.oldPassword) {
      throw new BadRequestException('Old password is incorrect');
    }
    user.password = changePasswordDto.newPassword;
    await this.usersRepository.save(user);
  }

  async updateEmail(id: number, updateEmailDto: UpdateEmailDto): Promise<void> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    user.email = updateEmailDto.newEmail;
    await this.usersRepository.save(user);
  }
}
