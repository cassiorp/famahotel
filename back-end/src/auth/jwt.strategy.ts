import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "./users.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UsersRepository)
        private usuariosRepository: UsersRepository
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'topSecret51',
          });
    }

    async validate(payload: JwtPayload) {
        const { usuario } = payload;
        const user = await this.usuariosRepository.findOne({ usuario });
    
        if (!user) {
          throw new UnauthorizedException("Assinatura de token invalida!");
        }
    
        return user;
      }
}