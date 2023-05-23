import { CreateTaskInput } from './../dto/createTask.input';
import { Injectable } from '@nestjs/common';
import { Task } from 'src/models/Task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  public getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);
    return newTask;
  }
}
