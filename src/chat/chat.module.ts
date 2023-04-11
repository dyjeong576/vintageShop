import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chats } from 'src/entities/chats.entity';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [PassportModule.register({}), TypeOrmModule.forFeature([Chats])],
  providers: [ChatService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}
