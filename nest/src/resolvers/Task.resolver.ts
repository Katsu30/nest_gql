import { Task } from 'src/models/Task.model';
import { TaskService } from '../services/Task.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskInput } from 'src/dto/createTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Task {
    return this.taskService.createTask(createTaskInput);
  }
}
