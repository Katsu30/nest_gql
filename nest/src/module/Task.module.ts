import { Module } from '@nestjs/common';
import { TaskResolver } from '../resolvers/Task.resolver';
import { TaskService } from 'src/services/Task.service';
import { PrismaService } from 'src/services/Prisma.service';

@Module({
  providers: [TaskResolver, TaskService, PrismaService],
  exports: [TaskResolver],
})
export class TaskModule {}
