import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'oldLikes' })
export class OldLikes {
  @ApiProperty({ example: 1, description: 'id' })
  @PrimaryGeneratedColumn({ type: 'int' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: '카테고리이름' })
  @Column('varchar', { length: 20 })
  @IsString()
  name: string;
}
