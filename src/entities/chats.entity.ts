import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chats {
  @ApiProperty({ example: 1, description: 'id' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({ description: '이메일' })
  @Column()
  email: string;

  @ApiProperty({ description: '메시지' })
  text: string;

  @CreateDateColumn()
  createdAt: Date;
}
