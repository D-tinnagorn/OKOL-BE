import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  async createState(data: CreateStatusDto) {
    const created = await this.prisma.status.create({
      data,
    });
    return { created, msg: 'successful' };
  }

  async getAllStatus() {
    return this.prisma.status.findMany();
  }

  async deleteItem(id: number) {
    try {
      return await this.prisma.status.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
  }
}
