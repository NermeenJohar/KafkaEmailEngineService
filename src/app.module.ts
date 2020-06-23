import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaGateWayService } from './services/kafka-gateway.service';
import { KafkaGateWayController } from './kafka-gateway-v1/kafka-gateway.controller';

@Module({
  imports: [KafkaGateWayService],
  controllers: [AppController, KafkaGateWayController],
  providers: [
    AppService,
    {
      provide: 'IKafkaGateWayInterface',
      useClass: KafkaGateWayService,
    },
  ],
})
export class AppModule {}
