import { PickType } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Users } from 'src/entities/users.entity';

export class UpdateUserDto extends PickType(Users, [
  'name',
  'address',
  'height',
  'weight',
  'phone',
] as const) {}
