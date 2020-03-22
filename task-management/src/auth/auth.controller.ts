import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';


@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) {}

    @Post('/signup')
    singUp(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<void> {
        return this.auth.singUp(authCredentials)
    }

    @Post('/signin')
    singIn(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.auth.singIn(authCredentials)
    }
}
