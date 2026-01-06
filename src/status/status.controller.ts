import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { StatusService } from './status.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Status')
@Controller('status')
export class StatusController {
  itemsService: any;
  constructor(private readonly statusService: StatusService) {}

  @Post()
  async createStatus(@Body() dto: CreateStatusDto) {
    return this.statusService.createState(dto);
  }

  @Get()
  async getAllStatus() {
    return this.statusService.getAllStatus();
  }

  @Delete(':id')
  async deleteItem(@Param('id', ParseIntPipe) id: number) {
    return this.statusService.deleteItem(id);
  }
}
