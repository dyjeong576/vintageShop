import { PickType } from '@nestjs/swagger';
import { Olds } from 'src/entities/olds.entity';

export class updateSaleDto extends PickType(Olds, [
  'categoryId',
  'name',
  'price',
  'description',
] as const) {}
