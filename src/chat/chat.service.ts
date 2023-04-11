import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chats } from 'src/entities/chats.entity';
import { Repository } from 'typeorm';
import { ChatDto } from './chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chats) private chatRepository: Repository<Chats>,
  ) {}
  async createMessage(chat: Chats): Promise<Chats> {
    return await this.chatRepository.save(chat);
  }

  async getMessages(): Promise<Chats[]> {
    return await this.chatRepository.find();
  }
}
