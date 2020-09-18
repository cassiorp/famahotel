
import { InternalServerErrorException } from "@nestjs/common";
import { Usuarios } from "src/auth/users.entity";
import { Repository, EntityRepository } from "typeorm";

import { Anotacoes } from "./annotations.entity";
import { CreateAnnotationDto } from "./dto/create-annotation.dto";

@EntityRepository(Anotacoes)
export class AnnotationsRepository extends Repository<Anotacoes> {

    async pegaAnotacoesUsuario(user: Usuarios): Promise<Anotacoes[]> {

        const query = this.createQueryBuilder('anotacoes');
        
        query.where('anotacoes.id_usuario = :id_usuario', {id_usuario: user.id} );

        return await query.getMany();

    }

    async criaAnotacao(
        createAnotacaoDto: CreateAnnotationDto,
        user: Usuarios
    ): Promise<Anotacoes> {

        const anotacao = this.converteCreateDtoParaEntidade(createAnotacaoDto);
        anotacao.usuario = user;
        await anotacao.save();
        delete anotacao.usuario;
        return anotacao;

    }


    private converteCreateDtoParaEntidade(createAnnotationDto: CreateAnnotationDto): Anotacoes {
        
        const { texto, feature, subfeature, subsubfeature, polarity, exim, term } = createAnnotationDto;

        const anotacao = new Anotacoes();
        anotacao.texto = texto;
        anotacao.feature = feature;
        anotacao.subfeature = subfeature;
        anotacao.subsubfeature = subsubfeature;
        anotacao.polarity = polarity;
        anotacao.exim = exim;
        anotacao.term = term;
        return anotacao;
    
    }

}