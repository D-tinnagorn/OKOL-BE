// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 ทำให้ PrismaService ใช้ได้ทั่วทั้งแอป โดยไม่ต้อง import ซ้ำทุก module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
