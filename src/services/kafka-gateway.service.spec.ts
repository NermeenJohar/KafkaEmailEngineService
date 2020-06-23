import { Test, TestingModule } from '@nestjs/testing';
import { KafkaGateWayService } from './kafka-gateway.service';

describe('KafkaEmailEngineService', () => {
  let service: KafkaGateWayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaGateWayService],
    }).compile();

    service = module.get<KafkaGateWayService>(KafkaGateWayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
