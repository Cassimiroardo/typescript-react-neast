import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks.status.enum';
import { CreateTaskDto } from './Dto/tasks.dto';
import { GetTasksFilterDto } from './Dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './Pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasks: TasksService) {}

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
    //     if(Object.keys(filterDto).length != 0) {
    //         return this.tasks.getTasksWithFilters(filterDto)
    //     }

    //     return this.tasks.getAllTasks()
    // }

    @Get(':id')
    getTaskById( @Param('id', ParseIntPipe) id: number ): Promise<Task> {
        return this.tasks.getTaskById(id)
    }

    // @Delete(':id')
    // deleteTask( @Param('id') id: string ): void {
    //     this.tasks.deleteTask(id)
    // } 

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask( @Body() newTask :CreateTaskDto ): Task {
    //     return this.tasks.createTask(newTask)
    // }

    // @Patch(':id/status')
    // updateTaskStatus( 
    //     @Param('id') id: string, 
    //     @Body('status', TaskStatusValidationPipe ) status: TaskStatus ): Task {
    //     return this.tasks.updateTaskStatus( id, status )
    // }
}