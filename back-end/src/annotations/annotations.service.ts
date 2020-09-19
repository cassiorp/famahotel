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

    async getAllAnnotations(user: Usuarios): Promise<Anotacoes[]> {
        return this.annotationRepository.getAllAnnotations(user);
    }

    async createAnnotation(
        createAnnotationDto: CreateAnnotationDto,
        user: Usuarios
    ): Promise<Anotacoes> {
        return this.annotationRepository.createAnnotation(createAnnotationDto, user);
    }

    async getById(
        id: number,
        user: Usuarios
    ): Promise<Anotacoes> {

        const found = await this.annotationRepository.findOne({ where: { id, id_usuario: user.id } });
        if (!found) {
            throw new NotFoundException(`Annotation with ID: ${id} not found`);
        }
        return found;

    }

    async updateAnnotation(
        id: number,
        user: Usuarios,
        updateAnnotationDto: UpdateAnnotationDto
    ): Promise<Anotacoes> {

        let anotacao = await this.getById(id, user);

        anotacao = this.convertsUpdateDtoToEntity(updateAnnotationDto, anotacao);

        anotacao.save();

        return anotacao;

    }

    async deleteById(
        id: number,
        user: Usuarios
    ): Promise<void> {

        const found = await this.annotationRepository.delete({ id, id_usuario: user.id });

        if (found.affected === 0) {
            throw new NotFoundException(`Annotation with ID: ${id} not found`);
        }

    }

    private convertsUpdateDtoToEntity(updateAnnotationDto: UpdateAnnotationDto, anotacao: Anotacoes): Anotacoes {

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
