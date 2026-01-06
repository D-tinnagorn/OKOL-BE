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
import { PlatformService } from './platform/platform.service';
import { PlatformController } from './platform/platform.controller';
import { PlatformModule } from './platform/platform.module';
import { JobsModule } from './jobs/jobs.module';
import { JobsService } from './jobs/jobs.service';
import { JobsController } from './jobs/jobs.controller';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'onelifemobiledev',
      password: '',
      database: 'okol_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PrismaModule,
    ScheduleModule.forRoot(),

    AuthModule,
    UserModule,
    StatusModule,
    PlatformModule,
    JobsModule,
    TodoModule,
    CategoryModule,
  ],
})
export class AppModule {}
