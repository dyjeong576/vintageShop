import { Test, TestingModule } from '@nestjs/testing';
import { OldsSaleService } from './olds-sale.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Olds } from 'src/entities/olds.entity';

describe('OldsSaleService', () => {
  let service: OldsSaleService;

  const createSaleDto = {
    categoryId: 21,
    name: 'testName',
    price: 1000000,
    description: 'Test를 위한 설명입니다.',
  };

  const updateSaleDto = {
    categoryId: 1,
    name: '마땡킴 레더자켓',
    price: 10000,
    description: '슈퍼구레잇잇!!',
  };

  const getSaleResult = {
    id: 2,
    categoryId: 1,
    userId: 1,
    name: '마땡킴 레더자켓',
    price: 10000,
    description: '슈퍼구레잇잇!!',
    image: '',
    views: 0,
    create_at: '2023-04-03T04:02:34.963Z',
    updatedAt: '2023-04-10T22:59:29.000Z',
    deletedAt: null,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OldsSaleService],
    }).compile();

    service = module.get<OldsSaleService>(OldsSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('createSale 게시물 생성', () => {
    expect(service.createSale(3, createSaleDto)).toBe('success upload OldSale');
  });

  it('getSale 2번 게시물 가져오기', () => {
    expect(service.getSale(2)).toBe(getSaleResult);
  });

  it('updateSale 게시물 업데이트', () => {
    expect(service.createSale(3, updateSaleDto)).toBe('Success modify sale');
  });
});
