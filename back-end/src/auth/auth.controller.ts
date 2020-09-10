import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsuarioDto } from './dto/usuarios.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/novo')
    criaUsuario (@Body(ValidationPipe) usuarioDto: UsuarioDto ): Promise<void>{
        return this.authService.criaUsuario(usuarioDto);
    }

    @Post('/login')
    login (@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto ): Promise<{ accessToken: string}>{
        return this.authService.login(authCredentialsDto);
    }

}
