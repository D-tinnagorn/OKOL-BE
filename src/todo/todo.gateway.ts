import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class TodoGateway {
  @WebSocketServer()
  server: Server;

  emitTodoCreated(todo: any) {
    this.server.emit('todo_created', todo);
  }
}
