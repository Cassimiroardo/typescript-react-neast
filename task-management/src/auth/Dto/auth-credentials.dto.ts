import { IsNotEmpty, IsString, MinLength, Matches, MaxLength } from "class-validator"

export class AuthCredentialsDto {
    
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    username: string

    @IsNotEmpty()
    @MinLength(8)
    password: string
}