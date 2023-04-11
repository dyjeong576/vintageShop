import { PickType } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Users } from 'src/entities/users.entity';

export class CreateUserDto extends PickType(Users, [
  'email',
  'name',
  'profileImage',
  'socialId',
] as const) {}
