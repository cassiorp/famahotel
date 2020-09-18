import { Controller, Post, Body, ValidationPipe, HttpCode, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsuarioDto } from './dto/usuarios.dto';
import { GetUser } from './get-user.decorator';
import { Usuarios } from './users.entity';

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
    @HttpCode(200)
    login (@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto ): Promise<{ accessToken: string}>{
        return this.authService.login(authCredentialsDto);
    }

}
