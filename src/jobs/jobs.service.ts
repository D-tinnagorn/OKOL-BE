import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobsDto } from './dto/create-jobs.dto';
import { randomFlutterColor } from 'src/utils/random-color';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, data: CreateJobsDto) {
    const color = BigInt(randomFlutterColor());

    const job = await this.prisma.jobs.create({
      data: {
        userId,
        colorCode: color,
        brandName: data.brandName,
        createTerm: data.createTerm,
        deadline: data.deadline,
        budget: data.budget,
        form: data.form,
        seeding: data.seeding,
        detail: data.detail,
        storyLine: data.storyLine,
        statusId: data.statusId,
        name: data.name,

        platforms: {
          connect: data.platformIds.map((id) => ({ id })),
        },
      },
      include: {
        status: true,
        platforms: true, 
      },
    });

    return {
      ...job,
      colorCode: job.colorCode.toString(),
    };
  }

  async findMyTasks(userId: number) {
    const jobs = await this.prisma.jobs.findMany({
      where: { userId },
      include: {
        status: true,
        platforms: true, 
      },
    });

    return jobs.map((job) => ({
      ...job,
      colorCode: job.colorCode.toString(),
    }));
  }

  async getJobsByid(id: string) {
    const jobId = Number(id);

    const job = await this.prisma.jobs.findUnique({
      where: { id: jobId },
      include: {
        status: true,
        platforms: true, 
      },
    });

    if (!job) return null;

    return {
      ...job,
      colorCode: job.colorCode.toString(),
    };
  }
}
