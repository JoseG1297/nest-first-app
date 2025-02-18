/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(id: number) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: TaskStatus
    ) {
        return this.tasksService.createTask(title, description, status);
    }

    @Put('/:id/status')
    updateTaskStatus(
        @Body('status') status: TaskStatus,
        @Body('id') id: number
    ) {
        return this.tasksService.updateTaskStatus(id, status);
    }

    @Delete('/:id')
    deleteTask(id: number) {
        return this.tasksService.deleteTask(id);
    }
}