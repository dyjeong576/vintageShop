import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Categories } from './categories.entity';
import { OldLikes } from './oldLikes.entity';
import { Olds } from './olds.entity';
import { Socials } from './socials.entity';
import { Users } from './users.entity';
import { Chats } from './chats.entity';

dotenv.config();
const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Categories, Socials, Olds, OldLikes, Chats],
  synchronize: false,
  autoLoadEntities: true,
  charset: 'utf8mb4',
  logging: true,
  keepConnectionAlive: true,
};

export { ormconfig };
