import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaEmailServiceModule } from './kafka-email-service/kafka-email-service.module';
import { KafkaEmailEngineService } from './kafka-email-service/services/kafka-email-engine.service';
import { KafkaEmailServiceController } from './kafka-email-service/kafka-email-service.controller';

@Module({
  imports: [KafkaEmailServiceModule],
  controllers: [AppController,KafkaEmailServiceController],
  providers: [AppService, KafkaEmailEngineService],
})
export class AppModule {}
