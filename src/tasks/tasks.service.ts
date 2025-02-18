/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string, status: TaskStatus): Task {
        const task: Task = {
            id: this.tasks.length + 1,
            title,
            description,
            status
        };
        this.tasks.push(task);
        return task;
    }

    getTaskById(id: number): Task {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
          throw new Error(`Task with ID "${id}" not found`);
        }
        return task;
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: number, title: string, description: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.title = title;
        task.description = description;
        task.status = status;
        return task;
    }
}
