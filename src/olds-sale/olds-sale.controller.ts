import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/getUserId.decorator';
import { createOldDto } from './dto/createSale.dto';
import { updateSaleDto } from './dto/updateSale.dto';
import { OldsSaleService } from './olds-sale.service';

@Controller('olds-sale')
@UseGuards(AuthGuard('jwt'))
export class OldsSaleController {
  constructor(private oldsSaleService: OldsSaleService) {}

  @Post()
  createSale(@GetUser() user: any, @Body() body: createOldDto): Promise<any> {
    return this.oldsSaleService.createSale(user.userId, body);
  }

  @Get(':id')
  async getSale(@Param('id') productId: number): Promise<any> {
    return this.oldsSaleService.getSale(productId);
  }

  @Get('all')
  async getAllSales(): Promise<any> {
    return this.oldsSaleService.getallSales();
  }

  @Get()
  async getSalesByCategory(
    @Query('categoryId') categoryId: number,
  ): Promise<any> {
    console.log(categoryId);
    return this.oldsSaleService.getSalesbyCategory(categoryId);
  }

  @Patch()
  async updateSale(
    @Query('id') productId: number,
    @GetUser() user: any,
    @Body() body: updateSaleDto,
  ): Promise<any> {
    return this.oldsSaleService.updateSale(user.userId, productId, body);
  }

  @Delete()
  async deleteSale(
    @Query('id') productId: number,
    @GetUser() user: any,
  ): Promise<string> {
    return this.oldsSaleService.deleteSale(user.userId, productId);
  }
}
