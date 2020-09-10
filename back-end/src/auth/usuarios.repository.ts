import { Repository, EntityRepository } from "typeorm";
import { Usuarios } from "./usuarios.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { UsuarioDto } from "./dto/usuarios.dto";


@EntityRepository(Usuarios)
export class UsuariosRepository extends Repository<Usuarios> {

    async criaUsuario(usuarioDto: UsuarioDto): Promise<void> {
        const { nome, usuario, senha } = usuarioDto;


        const user = new Usuarios();
        user.nome = nome;
        user.usuario = usuario;
        user.senha = senha;

        try {
            await user.save();
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException(`Username ${usuario} already exists`);
            } else {
                throw new InternalServerErrorException();
            }
        }


    }


    

}