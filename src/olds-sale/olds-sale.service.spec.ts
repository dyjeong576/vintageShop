import { Test, TestingModule } from '@nestjs/testing';
import { OldsSaleService } from './olds-sale.service';

describe('OldsSaleService', () => {
  let service: OldsSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OldsSaleService],
    }).compile();

    service = module.get<OldsSaleService>(OldsSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
