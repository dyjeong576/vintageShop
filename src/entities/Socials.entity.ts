import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'socials' })
export class Socials {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'int' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: '소셜이름' })
  @Column('varchar', { length: 20 })
  @IsString()
  name: string;
}
