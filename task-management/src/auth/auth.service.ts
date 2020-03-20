import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import JwtPayload from './jwt/jwt.payload.interface';

@Injectable()
export class AuthService {

    private logger = new Logger('AuthService')

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwt: JwtService
        ) {}

    async singUp(authCredentials: AuthCredentialsDto): Promise<void> {
        return this.userRepository.singUp(authCredentials)
    }

    async singIn(authCredentials: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const username = await this.userRepository.validateUserPassword(authCredentials)

        if(!username) {
            throw new UnauthorizedException('Invalid credentials')
        }

        const payload: JwtPayload = { username }
        const accessToken = await this.jwt.sign(payload)
        this.logger.debug(`GENERATED JWT TOKEN WITH PAYLOAD ${JSON.stringify(payload)}`)

        return { accessToken }
    }
 
}
