import { Module } from '@nestjs/common';
import { TodoGateway } from '../todo/todo.gateway';

@Module({
  providers: [TodoGateway],
  exports: [TodoGateway], 
})
export class RealtimeModule {}
