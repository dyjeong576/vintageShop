import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Olds } from 'src/entities/olds.entity';
import { OldsSaleController } from './olds-sale.controller';
import { OldsSaleService } from './olds-sale.service';

@Module({
  imports: [PassportModule.register({}), TypeOrmModule.forFeature([Olds])],
  controllers: [OldsSaleController],
  providers: [OldsSaleService],
})
export class OldsSaleModule {}
