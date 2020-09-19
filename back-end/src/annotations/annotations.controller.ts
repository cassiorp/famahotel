import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Usuarios } from 'src/auth/users.entity';
import { Anotacoes } from './annotations.entity';
import { AnnotationsService } from './annotations.service';
import { CreateAnnotationDto } from './dto/create-annotation.dto';
import { UpdateAnnotationDto } from './dto/update-annotation.dto';

@Controller('annotations')
@UseGuards(AuthGuard())
export class AnnotationsController {
    constructor(
        private annotationService: AnnotationsService,
    ) { }

    @Get()
    getAllAnnotations(@GetUser() user: Usuarios): Promise<Anotacoes[]>{
        return this.annotationService.getAllAnnotations(user);
    }

    @Get('/:id')
    getById(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: Usuarios
    ): Promise<Anotacoes>{
        return this.annotationService.getById(id, user);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createAnnotation(
        @Body() createAnnotation: CreateAnnotationDto,
        @GetUser() user: Usuarios
    ): Promise<Anotacoes> {
        return this.annotationService.createAnnotation(createAnnotation, user);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateAnntation(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: Usuarios,
        @Body() updateAnnotationDto: UpdateAnnotationDto
    ): Promise<Anotacoes> {
        return this.annotationService.updateAnnotation(id, user, updateAnnotationDto);
    }

    @Delete('/:id')
    deletaPorId(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: Usuarios,
    ): Promise<void>{
        return this.annotationService.deleteById(id, user);
    }
    
}
