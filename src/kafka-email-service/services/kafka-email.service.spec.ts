import { Test, TestingModule } from '@nestjs/testing';
import { KafkaEmailEngineService } from './kafka-email-engine.service';

describe('KafkaEmailEngineService', () => {
  let service: KafkaEmailEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaEmailEngineService],
    }).compile();

    service = module.get<KafkaEmailEngineService>(KafkaEmailEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
