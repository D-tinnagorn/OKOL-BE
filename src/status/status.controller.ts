import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { StatusService } from './status.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Status')

@Controller('status')
export class StatusController {
    constructor(private readonly statusService:StatusService){}

    @Post()
    async createStatus(@Body() dto:CreateStatusDto){
        return this.statusService.createState(dto.status);
    }

    @Get()
    async getAllStatus(){
        return this.statusService.getAllStatus();
    }
}
