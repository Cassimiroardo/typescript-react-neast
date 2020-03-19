import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./Dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { hashPassword, generateSalt } from "src/utils/bcryptFunctions";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async singUp(authCredentials: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentials

        const user = new User()

        user.username = username
        user.salt     = await generateSalt()
        user.password = await hashPassword(password, user.salt)

        try {
            await user.save()
        }
        catch({ code }) {
            if(code === '23505') {
                throw new ConflictException('Username already exists')
            }
            else {
                throw new InternalServerErrorException()
            }
        } 
    }

    async validateUserPassword(authCredentials: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentials
        const user = await this.findOne({ username })

        if(user && user.validatePassword(password)) {
            return user.username
        }
        else {
            return null
        }
    }
}