import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosRepository } from './usuarios.repository';
import {  JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UsuarioDto } from './dto/usuarios.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuariosRepository)
        private usuariosRepository: UsuariosRepository,
        private jwtService: JwtService
    ){}
    

    async criaUsuario(usuarioDto: UsuarioDto): Promise<void>{
        return this.usuariosRepository.criaUsuario(usuarioDto);
    }


    async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string}>{
        const usuario = await this.validaUsuario(authCredentialsDto);
        
        if(!usuario){
             throw new UnauthorizedException("Senha ou Usuario invalido");
        }
 
        const payload: JwtPayload = {usuario};
        const accessToken = await this.jwtService.sign(payload);
     
        return { accessToken };
     }


    private async validaUsuario(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { usuario, senha } = authCredentialsDto;
        const user = await this.usuariosRepository.findOne({ usuario });

        if(!user){
            return null;
        }

        const validPassword = user.senha === senha;
        
        if (validPassword) {
            return user.usuario;
        }
       
        return null;

    }

}
