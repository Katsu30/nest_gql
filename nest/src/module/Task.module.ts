import { Module } from '@nestjs/common';
import { TaskResolver } from '../resolvers/Task.resolver';
import { TaskService } from '../services/Task.service';

@Module({
  imports: [TaskModule],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
