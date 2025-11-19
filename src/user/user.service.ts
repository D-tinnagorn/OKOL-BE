// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
        phone: data.phone,
        social: data.social || [],
      },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async checkTakenUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    return { taken: !!user }; 
  }

  async checkPhoneNumber(phone:string){
    const phonenumber = await this.prisma.user.findUnique({
      where:{phone}
    })
          return { taken: !!phonenumber }; 

  }


}
