import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'olds' })
export class Olds {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'int' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: '카테고리아이디' })
  @Column({ type: 'int' })
  @IsNumber()
  categoryId: number;

  @ApiProperty({ description: '제품명' })
  @Column('varchar', { length: 20 })
  @IsString()
  name: string;

  @ApiProperty({ description: '가격' })
  @Column({ type: 'int' })
  @IsNumber()
  price: number;

  @ApiProperty({ description: '조회수' })
  @Column({ type: 'int' })
  @IsNumber()
  views: number;

  @ApiProperty({ description: '생성날짜' })
  @CreateDateColumn()
  create_at: Date;

  @ApiProperty({ description: '업데이트날짜' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: '삭제날짜' })
  @DeleteDateColumn()
  deletedAt: Date | null;
}
