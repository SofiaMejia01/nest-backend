import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterUserDto {
 

    @IsEmail()
    email: string;

    @IsString()
    name: string;

     @IsString()
     apellido: string;

    @MinLength(6)
    password: string;

    




}