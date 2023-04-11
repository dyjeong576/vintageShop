import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Olds } from 'src/entities/olds.entity';
import { DataSource, Repository } from 'typeorm';
import { createOldDto } from './dto/createSale.dto';
import { updateSaleDto } from './dto/updateSale.dto';

@Injectable()
export class OldsSaleService {
  constructor(
    @InjectRepository(Olds)
    private oldsSaleRepository: Repository<Olds>,
    private dataSource: DataSource,
  ) {}

  async createSale(userId: number, body: createOldDto): Promise<any> {
    const sale = new Olds();
    sale.userId = userId;
    sale.categoryId = body.categoryId;
    sale.name = body.name;
    sale.price = body.price;
    sale.description = body.description;

    await this.oldsSaleRepository.save(sale);

    return 'success upload OldSale';
  }

  async deleteSale(userId: number, productId: number): Promise<any> {
    const sale = await this.oldsSaleRepository.findOne({
      where: { id: productId },
    });

    if (sale.userId != userId)
      throw new HttpException('Inconsistent with user information', 403);

    await this.oldsSaleRepository.softDelete({ id: productId });

    return 'success delete OldSale';
  }

  async getSale(productId: number): Promise<any> {
    const sale = await this.oldsSaleRepository.findOne({
      where: { id: productId },
    });

    if (sale === null) throw new HttpException('No Content', 401); //204  왜 안 던지냐

    return sale;
  }

  async getallSales(): Promise<any> {
    const sale = await this.oldsSaleRepository.find();

    if (!sale) throw new HttpException('No Content', 204);

    return sale;
  }

  async getSalesbyCategory(categoryId: number): Promise<any> {
    const sale = await this.oldsSaleRepository.find({
      where: { categoryId: categoryId },
    });

    if (!sale) throw new HttpException('No Content', 204);

    return sale;
  }

  async updateSale(
    userId: number,
    productId: number,
    body: updateSaleDto,
  ): Promise<any> {
    const sale = await this.oldsSaleRepository.findOne({
      where: { id: productId },
    });

    if (!sale) throw new HttpException('No Content', 204);
    if (sale.id != userId) new HttpException('User does not exist', 401);

    this.dataSource
      .createQueryBuilder()
      .update('Olds')
      .where('id = :id', { id: productId })
      .set({ ...body })
      .execute();

    return 'Success modify sale';
  }
}
