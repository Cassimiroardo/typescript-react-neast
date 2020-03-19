import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { TaskStatus } from './tasks.status.enum';
import { CreateTaskDto } from './Dto/tasks.dto';
import { GetTasksFilterDto } from './Dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto, user)
    }

    async getTaskById(id: number, user: User): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id, userId: user.id}})
        if(!found) {
          throw new NotFoundException()               
        }
        
        return found
    }

    async deleteTask(id: number): Promise<number> {
        const result = await this.taskRepository.delete(id)

        if(result.affected === 0) {
            throw new NotFoundException()               
          }

          return result.affected
    }

    async createTask(taskDto: CreateTaskDto, user: User): Promise<Task> {
         return await this.taskRepository.createTask(taskDto, user)
    }

    async updateTaskStatus(id: number, user: User , status: TaskStatus): Promise<number> {
        await this.getTaskById(id, user)
        const result = await this.taskRepository.update(id, {status: status})
        return result.affected
    }
}



