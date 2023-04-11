import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Payload } from './strategy/auth.jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async create(userData: CreateUserDto): Promise<Users> {
    const { email, profileImage, name } = userData;

    const user = new Users();
    user.email = email;
    user.profileImage = profileImage;
    user.name = name;

    await this.usersRepository.save(user);

    return user;
  }

  async login(userData: CreateUserDto): Promise<{ accessToken: string }> {
    let user = await this.usersRepository.findOne({
      where: { email: userData.email, socialId: userData.socialId },
    });
    if (!user) user = await this.usersRepository.save({ ...userData });

    const payload: Payload = {
      username: user.name,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async updateUserInfo(userId: number, userInfo: UpdateUserDto): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
    });
    if (!user) throw new HttpException('User does not exist', 401);

    this.usersRepository
      .createQueryBuilder('users')
      .update('users')
      .where('users.id = :id', { id: userId })
      .set({ ...userInfo })
      .execute();

    return 'update success';
  }
}
