import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaGateWayService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;

  constructor() {
   this.kafka =  new Kafka({
      clientId: 'id',
      brokers: ['mybuild.centralus.cloudapp.azure.com:9092'],
    })
    this.producer = this.kafka.producer();
  }

  // Connecting to kafka on Module Init
  async onModuleInit(): Promise<void> {
    await this.connect();
  }

  // Disconnecting on Module Destroy
  async onModuleDestroy(): Promise<void> {
    await this.disconnect();
  }

  // Connecting producer
  async connect() {
    await this.producer.connect();
  }

  // Disconnecting producer
  async disconnect() {
    await this.producer.disconnect();
  }

  // Send Message with Payload to kafka Email Engine Service
  async sendMessage(payloadMessage: any) {
    payloadMessage.EmailParameters = JSON.stringify(payloadMessage.EmailParameters);
    await this.connect;
    const metadata = await this.producer
      .send({
        topic: payloadMessage.topicName,
        messages: [{ value: JSON.stringify(payloadMessage) }],
      }).catch(e => console.error(e.message, e));
    return metadata;
  }
}
