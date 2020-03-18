import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from "./tasks.status.enum";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    status: TaskStatus
}