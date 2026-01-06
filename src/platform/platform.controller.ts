import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
@ApiTags('platform')
@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  async createStatus(@Body() dto: CreatePlatformDto) {
    return this.platformService.createPlatform(dto.status);
  }

  @Get()
  async getAllStatus() {
    return this.platformService.getAllStatus();
  }

}
