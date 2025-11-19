import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {  CreateStatusDto } from './dto/create-status.dto';

@Injectable()
export class StatusService {
    constructor(private prisma: PrismaService){}

    async createState(status:string){
        const created = await this.prisma.status.create({
            data:{status}
        })
         return {created,"msg":"successful"}
    }

    async getAllStatus(){
        return this.prisma.status.findMany();
    }
}
