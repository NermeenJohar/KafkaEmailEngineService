import { Module } from '@nestjs/common';
import { KafkaEmailEngineService } from './services/kafka-email-engine.service';

@Module({})
export class KafkaEmailServiceModule {

    exports: [KafkaEmailEngineService]
}
