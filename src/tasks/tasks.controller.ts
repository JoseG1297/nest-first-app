/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id: number) {
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

    @Put(':id')
    updateTask(
        @Param('id', ParseIntPipe) id: number,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: TaskStatus
    ) {
        return this.tasksService.updateTask(id, title, description, status);
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.deleteTask(id);
    }
}