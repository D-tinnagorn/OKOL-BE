import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Todo } from '@prisma/client';
import { Server } from 'socket.io';

// TodoGateway.ts
@WebSocketGateway()
export class TodoGateway {
  @WebSocketServer() server: Server;

  afterCreateTodo(todo: Todo) {
    this.server.emit('todo_updated', todo);
  }

  afterUpdateTodo(todo: Todo) {
    this.server.emit('todo_updated', todo);
  }

  afterDeleteTodo(id: string) {
    this.server.emit('todo_updated', { id });
  }
}

