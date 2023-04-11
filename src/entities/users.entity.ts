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

@Entity({ name: 'users' })
export class Users {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'int' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: '이름' })
  @Column('varchar', { length: 20 })
  @IsString()
  name: string;

  @ApiProperty({ description: '소셜아이디' })
  @Column({ type: 'int' })
  @IsNumber()
  socialId: number;

  @ApiProperty({ description: '이메일' })
  @Column('varchar', { unique: true, length: 30 })
  @IsString()
  email: string;

  @ApiProperty({ description: '프로필이미지' })
  @Column('varchar', { length: 30 })
  @IsString()
  profileImage: string;

  @ApiProperty({ description: '주소' })
  @Column('varchar', { length: 30 })
  @IsString()
  address: string;

  @ApiProperty({ description: '전화번호' })
  @Column('varchar', { length: 30 })
  @IsString()
  phone: string;

  @ApiProperty({ description: '키' })
  @Column({ type: 'int' })
  @IsNumber()
  height: number;

  @ApiProperty({ description: '몸무게' })
  @Column({ type: 'int' })
  @IsNumber()
  weight: number;

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
