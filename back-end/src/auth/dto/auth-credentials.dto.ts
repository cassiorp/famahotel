import { IsString, MinLength, MaxLength } from "class-validator";


export class AuthCredentialsDto {
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    usuario: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    senha: string;

}