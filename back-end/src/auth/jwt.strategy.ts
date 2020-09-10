import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from "@nestjs/typeorm";
import { UsuariosRepository } from "./usuarios.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UsuariosRepository)
        private usuariosRepository: UsuariosRepository
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'topSecret51',
          });
    }

    async valida(payload: JwtPayload) {
        const { usuario } = payload;
        const user = await this.userRepository.findOne({ usuario });
    
        if (!user) {
          throw new UnauthorizedException("Assinatura de token!");
        }
    
        return user;
      }
}