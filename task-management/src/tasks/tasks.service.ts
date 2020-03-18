import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks.status.enum';
import { CreateTaskDto } from './Dto/tasks.dto';
import { GetTasksFilterDto } from './Dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    // getAllTasks(): Task[] {
    //     return this.tasks
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto
        
    //     let t = this.getAllTasks()

    //     if(status) {
    //         t = t.filter( item => item.status === status )
    //     }

    //     if(search) {
    //         t = t.filter( item => 
    //             item.title === search || item.description === search )
    //     }

    //     return t
    // }

       async getTaskById(id: number): Promise<Task> {
           const found = await this.taskRepository.findOne(id)

           if(!found) {
             throw new NotFoundException()               
           }

           return found
       }

    // getTaskById(id: string): Task {
    //     const found = this.tasks.find( t => t.id = id)

    //     if(!found) {
    //         throw new NotFoundException()
    //     }

    //     return found
    // }

    // deleteTask(id: string): string {
    //     const found = this.tasks.find( t => t.id = id)

    //     if(!found) {
    //         throw new NotFoundException()
    //     }

    //     const toDestroy = this.tasks.indexOf(found)
    //     this.tasks.splice(toDestroy, 1)
    //     return id
    // }

    // createTask(taskDto: CreateTaskDto): Task {
    //     const { title, description } = taskDto
    //     const newTask: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     }

    //     this.tasks.push(newTask)
    //     return newTask
    // }

    // updateTaskStatus(id:string ,status: TaskStatus): Task {
    //     const updated = this.getTaskById(id)
    //     updated.status = status
    //     return updated
    // }
}



