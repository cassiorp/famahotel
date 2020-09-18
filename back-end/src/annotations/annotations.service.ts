import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/auth/users.entity';
import { Anotacoes } from './annotations.entity';
import { AnnotationsRepository } from './annotations.repository';

import { CreateAnnotationDto } from './dto/create-annotation.dto';
import { UpdateAnnotationDto } from './dto/update-annotation.dto';

@Injectable()
export class AnnotationsService {
    constructor(
        @InjectRepository(AnnotationsRepository)
        private annotationRepository: AnnotationsRepository,

    ) { }


    async pegaAnotacoesUsuario(user: Usuarios): Promise<Anotacoes[]> {
        return this.annotationRepository.pegaAnotacoesUsuario(user);
    }

    async criaAnotacao(
        createAnnotationDto: CreateAnnotationDto,
        user: Usuarios
    ): Promise<Anotacoes> {
        return this.annotationRepository.criaAnotacao(createAnnotationDto, user);
    }

    async buscaPorId(
        id: number,
        user: Usuarios
    ): Promise<Anotacoes> {

        const found = await this.annotationRepository.findOne({ where: { id, id_usuario: user.id } });

        if (!found) {
            throw new NotFoundException(`Annotation with ID: ${id} not found`);
        }
        return found;
    }


    async editaAnotacao(
        id: number,
        user: Usuarios,
        updateAnnotationDto: UpdateAnnotationDto
        ): Promise<Anotacoes> {
        
        let anotacao = await this.buscaPorId(id, user);

        anotacao = this.converteUpdateDtoParaEntidade(updateAnnotationDto, anotacao);

        anotacao.save();

        return anotacao;
    }


    private converteUpdateDtoParaEntidade(updateAnnotationDto: UpdateAnnotationDto, anotacao: Anotacoes): Anotacoes {
        const { feature, subfeature, subsubfeature, polarity, exim, term } = updateAnnotationDto;


        anotacao.feature = feature;
        anotacao.subfeature = subfeature;
        anotacao.subsubfeature = subsubfeature;
        anotacao.polarity = polarity;
        anotacao.exim = exim;
        anotacao.term = term;
        return anotacao;
    }
}
