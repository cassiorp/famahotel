import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Usuarios } from 'src/auth/users.entity';
import { Anotacoes } from './annotations.entity';
import { AnnotationsService } from './annotations.service';
import { CreateAnnotationDto } from './dto/create-annotation.dto';

@Controller('annotations')
@UseGuards(AuthGuard())
export class AnnotationsController {
    constructor(
        private annotationService: AnnotationsService,
    ){}

    @Post()
    criaAnotacao(
        @Body() createAnnotation: CreateAnnotationDto,
        @GetUser() user: Usuarios
        ): Promise<Anotacoes>{
        return this.annotationService.criaAnotacao(createAnnotation, user);
    }
}
