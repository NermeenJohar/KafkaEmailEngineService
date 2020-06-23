import { Controller, Post, Body } from '@nestjs/common';
import { KafkaEmailEngineService } from './services/kafka-email-engine.service';

@Controller('kafkaEmailService')
export class KafkaEmailServiceController {
  constructor(private readonly kafkaEmailEngineService: KafkaEmailEngineService) { }

  @Post()
  async sendEmailMessageKafka(@Body() payLoad: any) {
    return await this.kafkaEmailEngineService.sendMessage(payLoad);
  }
 
}
