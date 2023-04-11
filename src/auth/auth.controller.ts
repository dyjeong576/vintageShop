import {
  Body,
  Controller,
  Get,
  Patch,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { KakaoGuard } from 'src/auth/guard/kakao.gaurd';
import { GetUser } from 'src/decorators/getUserId.decorator';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('auth')
@UseGuards(AuthGuard('jwt'))
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('hello')
  async hello() {
    return 'Hello';
  }

  @UseGuards(KakaoGuard)
  @Get('kakao')
  async kakaologin(
    @Req() req: any,
  ): Promise<{ accessToken: string } | undefined> {
    const kakaoUserInfo: any = req.user.profile._json.kakao_account;

    const userDto: CreateUserDto = {
      email: kakaoUserInfo.email,
      name: kakaoUserInfo.profile.nickname,
      socialId: 1,
      profileImage: kakaoUserInfo.profile.profile_image_url,
    };

    return await this.authService.login(userDto);
  }

  @Patch('info')
  async updateUserInfo(
    @GetUser() user: any,
    @Body() userInfo: UpdateUserDto,
  ): Promise<any> {
    return this.authService.updateUserInfo(user.userId, userInfo);
  }
}
