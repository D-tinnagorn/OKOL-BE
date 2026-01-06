import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CreateJobsDto } from './dto/create-jobs.dto';
@ApiTags('Jobs')
@ApiBearerAuth()
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() dto: CreateJobsDto) {
    return this.jobsService.create(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findMyTasks(@Req() req) {
    return this.jobsService.findMyTasks(req.user.id);
  }
 
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  jetJobsById(@Param('id') id:string) {
    return this.jobsService.getJobsByid(id);
  }
}
