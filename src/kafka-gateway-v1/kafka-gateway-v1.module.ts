import { Module } from '@nestjs/common';
import { KafkaGateWayService } from '../services/kafka-gateway.service';

@Module({})
export class KafkaEmailServiceModule {

    exports: [KafkaGateWayService]
}
