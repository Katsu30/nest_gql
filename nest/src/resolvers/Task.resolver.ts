import { Task as TaskModel } from 'src/models/Task.model';
import { TaskService } from '../services/Task.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskInput } from 'src/dto/createTask.input';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from 'src/dto/updateTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return await this.taskService.updateTask(updateTaskInput);
  }
}
