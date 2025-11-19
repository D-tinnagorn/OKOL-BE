import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './task.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from './prisma/prisma.module';
import { StatusService } from './status/status.service';
import { StatusModule } from './status/status.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres', // or mysql
      host: 'localhost',
      port: 5432,
      username: 'onelifemobiledev',
      password: '',
      database: 'okol_db',
      autoLoadEntities: true,
      synchronize: true,
    }),PrismaModule,ScheduleModule.forRoot(),AuthModule, UserModule, StatusModule],
  providers: [TasksService, UserService, StatusService],
})
export class AppModule {}
