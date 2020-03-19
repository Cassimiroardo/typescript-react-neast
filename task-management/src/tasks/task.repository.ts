import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./Dto/tasks.dto";
import { TaskStatus } from "./tasks.status.enum";
import { GetTasksFilterDto } from "./Dto/get-tasks-filter.dto";
import { User } from "src/auth/user.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async createTask(taskDto: CreateTaskDto, user: User): Promise<Task> {
        const { title, description } = taskDto

        const task = new Task()
        task.title = title
        task.description = description
        task.status = TaskStatus.OPEN
        task.user = user
        await task.save()

        delete task.user

        return task
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

        const result = await query.getMany()

        return result
   }
   
}