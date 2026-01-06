import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlatformService {
    constructor(private prisma: PrismaService){}

    async createPlatform(platform:string){
        const created = await this.prisma.platform.create({
            data:{platform}
        })
         return {created,"msg":"successful"}
    }

    async getAllStatus(){
        return this.prisma.platform.findMany();
    }
}
