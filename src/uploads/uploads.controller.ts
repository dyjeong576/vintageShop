import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './uploads.service';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('')
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadFile(@UploadedFiles() files): Promise<string[]> {
    const imgurl: string[] = [];
    await Promise.all(
      files.map(async (file: Express.Multer.File) => {
        const key = await this.uploadsService.uploadImage(file);
        imgurl.push(process.env.AWS_CLOUDFRONT + key);
      }),
    );

    return imgurl;
  }
}
