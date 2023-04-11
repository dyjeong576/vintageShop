import { Test, TestingModule } from '@nestjs/testing';
import { OldsSaleController } from './olds-sale.controller';

describe('OldsSaleController', () => {
  let controller: OldsSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OldsSaleController],
    }).compile();

    controller = module.get<OldsSaleController>(OldsSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
