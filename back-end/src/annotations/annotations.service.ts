import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/auth/users.entity';
import { Anotacoes } from './annotations.entity';
import { AnnotationsRepository } from './annotations.repository';

import { CreateAnnotationDto } from './dto/create-annotation.dto';


@Injectable()
export class AnnotationsService {
    constructor(
        @InjectRepository(AnnotationsRepository)
        private annotationRepository: AnnotationsRepository,

    ) { }

    async criaAnotacao(
        createAnnotationDto: CreateAnnotationDto,
        user: Usuarios
    ): Promise<Anotacoes> {
        return this.annotationRepository.criaAnotacao(createAnnotationDto, user);
    }



}
