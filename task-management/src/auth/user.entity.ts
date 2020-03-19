import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { hashPassword } from "src/utils/bcryptFunctions";
import { Task } from "src/tasks/task.entity";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    salt: string

    @OneToMany(type => Task, task => task.user, { eager: true})
    tasks: Task[]

    async validatePassword(password: string): Promise<boolean> {
        const  hash = await hashPassword(password, this.salt)
        return hash === this.password
    }
}