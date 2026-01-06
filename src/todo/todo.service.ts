import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TodoGateway } from './todo.gateway';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: TodoGateway,
  ) {}

  findAll() {
    return this.prisma.todo.findMany();
  }

  async create(dto: CreateTodoDto) {
    const todo = await this.prisma.todo.create({
      data: {
        title: dto.title,
      },
    });

    this.gateway.emitTodoCreated(todo);
    return todo;
  }

  async delete(id: string) {
    return await this.prisma.todo.delete({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: {
        title: dto.title, 
        completed: dto.completed,
      },
    });
  }
}
