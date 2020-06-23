import { Controller, Post, Body, Inject } from '@nestjs/common';
import { KafkaGateWayService } from '../services/kafka-gateway.service';
import { kafkaGateWayV1Interface } from 'src/constants';

@Controller('v1/kafkaGateWay')
export class KafkaGateWayController {
  constructor(@Inject(kafkaGateWayV1Interface)
    private readonly kafkaGateWayService: KafkaGateWayService,
  ) {}

  @Post()
  async sendEmailMessageKafka(@Body() payLoad: any) {
    return await this.kafkaGateWayService.sendMessage(payLoad);
  }
}
