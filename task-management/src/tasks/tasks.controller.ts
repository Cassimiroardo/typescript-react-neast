import { Controller,
         Get, 
         Post, 
         Body, 
         Param, 
         Delete, 
         Patch, 
         Query, 
         UsePipes, 
         ValidationPipe, 
         ParseIntPipe, 
         UseGuards, Req, Logger } from '@nestjs/common';
         
import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks.status.enum';
import { CreateTaskDto } from './Dto/tasks.dto';
import { GetTasksFilterDto } from './Dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './Pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {

    private logger = new Logger('TaskController')

    constructor(private tasks: TasksService) {}

    @Get()
    getTasks(
        @Query(ValidationPipe) filterDto: GetTasksFilterDto,
        @Req() req
        ): Promise<Task[]> {
        this.logger.verbose(`\n USER: ${req.user.username}\n RETRIVING ALL TASKS.\n FILTERS: ${JSON.stringify(filterDto)}`)
        return this.tasks.getTasks(filterDto, req.user)
    }

    @Get(':id')
    getTaskById(
        @Param('id', ParseIntPipe) id: number,
        @Req() req
        ): Promise<Task> {
        return this.tasks.getTaskById(id, req.user)
    }

    @Delete(':id')
    deleteTask( 
        @Param('id', ParseIntPipe) id: number,
        @Req() req
        ): Promise<number> {
        return this.tasks.deleteTask(id, req.user)
    } 

    @Post()
    @UsePipes(ValidationPipe)
    createTask( 
        @Body() newTask :CreateTaskDto,
        @Req() req
        ): Promise<Task> {
        this.logger.verbose(`\n USER: ${req.user.username}\n CREATING NEW TASK.\n DATA: ${JSON.stringify(newTask)}`)
        return this.tasks.createTask(newTask, req.user)
    }

    @Patch(':id/status')
    updateTaskStatus( 
        @Param('id', ParseIntPipe) id: number, 
        @Body('status', TaskStatusValidationPipe ) status: TaskStatus,
        @Req() req
        ): Promise<Number> {
        return this.tasks.updateTaskStatus( id, req.user, status )
    }
}