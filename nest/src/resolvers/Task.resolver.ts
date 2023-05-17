import { Task } from 'src/models/Task.model';
import { TaskService } from '../services/Task.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.TaskService.getTasks();
  }
}
