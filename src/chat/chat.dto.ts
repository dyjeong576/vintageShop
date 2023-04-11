import { PickType } from '@nestjs/swagger';
import { Chats } from 'src/entities/chats.entity';

export class ChatDto extends PickType(Chats, ['email', 'text'] as const) {}
