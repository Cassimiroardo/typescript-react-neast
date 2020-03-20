import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./Dto/tasks.dto";
import { TaskStatus } from "./tasks.status.enum";
import { GetTasksFilterDto } from "./Dto/get-tasks-filter.dto";
import { User } from "src/auth/user.entity";
import { Logger, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    private logger = new Logger('TaskRepository')

    async createTask(taskDto: CreateTaskDto, user: User): Promise<Task> {
        const { title, description } = taskDto

        const task = new Task()
        task.title = title
        task.description = description
        task.status = TaskStatus.OPEN
        task.user = user
        await task.save()

        try {
            delete task.user
            return task
        }catch(err) {
            this.logger.error(`FAILED TO CREATE TASK FOR USER ${user.username}`,err.stack)
            throw new InternalServerErrorException()
        }
   }

   async getTasks(filterDto: GetTasksFilterDto, user: User) {
        const { status, search } = filterDto

        const query = this.createQueryBuilder('task')

        if(status) {
            query.andWhere('task.status = :status', { status })
        }
        if(search) {
            query.andWhere('task.title LIKE :title', { title: `%${search}%`})
                 .orWhere('task.description LIKE :description', { description: `%${search}%`})
        }

        query.andWhere('task.userId = :id', { id: user.id })

        try {
            const result = await query.getMany()
            return result
        }catch(err) {
            this.logger.error(`FAILED TO GET TASKS FOR USER ${user.username}`, err.stack)
            throw new InternalServerErrorException()
        }
   }
   
}