import { PickType } from '@nestjs/swagger';
import { Olds } from 'src/entities/olds.entity';

export class createOldDto extends PickType(Olds, [
  'categoryId',
  'name',
  'price',
  'description',
] as const) {}
