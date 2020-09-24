import { Test } from '@nestjs/testing';
import { AnnotationsService } from './annotations.service';
import { AnnotationsRepository } from '../annotations.repository';
import { CreateAnnotationDto } from '../dto/create-annotation.dto';
import { AnnotationPolarity } from '../annotation-polarity.enum';
import { NotFoundException, UploadedFiles } from '@nestjs/common';

const mockUser = { id: 1, usuario: 'nome teste' }

const mockAnnotationsRepository = () => ({
    find: jest.fn(),
    findOne: jest.fn(),
    createAnnotation: jest.fn(),
    delete: jest.fn()
});

describe('AnnotationsService', () => {
    let annotationService;
    let annotationRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                AnnotationsService,
                { provide: AnnotationsRepository, useFactory: mockAnnotationsRepository },
            ]
        }).compile();

        annotationService = await module.get<AnnotationsService>(AnnotationsService);
        annotationRepository = await module.get<AnnotationsRepository>(AnnotationsRepository);
    });

    it('should be defined', () => {
        expect(annotationService).toBeDefined();
        expect(annotationRepository).toBeDefined();
    });


    describe('createAnnotation', () => {
        it('should create a annotation', async () => {
            expect(annotationRepository.createAnnotation).not.toHaveBeenCalled;
            annotationRepository.createAnnotation.mockResolvedValue('someValue');

            let mockCreateAnnotationDto = {
                texto: "user cassio3",
                feature: "editado",
                subfeature: "subFeature de teste",
                subsubfeature: "subsubFeature de teste",
                polarity: AnnotationPolarity.neutra,
                exim: "implicito",
                term: "Termo de teste"
            };


            const result = await annotationService.createAnnotation(mockCreateAnnotationDto, mockUser);

            expect(annotationRepository.createAnnotation).toHaveBeenCalled;
            expect(result).toEqual('someValue')
        })


    });

    describe('getAllAnnotations', () => {
        it('gets all annotations from the user', async () => {
            annotationRepository.find.mockResolvedValue('someValue');
            expect(annotationRepository.find).not.toHaveBeenCalled;

            const result = await annotationService.getAllAnnotations(mockUser);
            expect(annotationRepository.find).toHaveBeenCalled;

            expect(result).toEqual('someValue');
        });

    });

    describe('getById', () => {
        it('get annotation by id from user', async () => {
            const mockAnnotation = {
                texto: "user cassio3",
                feature: "editado",
                subfeature: "subFeature de teste",
                subsubfeature: "subsubFeature de teste",
                polarity: AnnotationPolarity.neutra,
                exim: "implicito",
                term: "Termo de teste"
            }

            annotationRepository.findOne.mockResolvedValue(mockAnnotation);

            const result = await annotationService.getById(1, mockUser);
            expect(result).toEqual(mockAnnotation);
        });

        it('DONT get annotation by id from user', () => {
            annotationRepository.findOne.mockResolvedValue(null);
            expect(annotationService.getById(1, mockUser)).rejects.toThrow(NotFoundException);
        });

    })

    describe('updateAnnotation', () => {
        it('if edit annotation', async () => {
            const mockAnnotationUpdate = {
                feature: "editado",
                subfeature: "subFeature de teste",
                subsubfeature: "subsubFeature de teste",
                polarity: AnnotationPolarity.neutra,
                exim: "implicito",
                term: "Termo de teste"
            }

            const save = jest.fn().mockResolvedValue(true);

            annotationService.getById = jest.fn().mockResolvedValue({
                mockAnnotationUpdate,
                save
            });


            expect(annotationService.getById).not.toHaveBeenCalled();
            const result = await annotationService.updateAnnotation(1, mockUser, mockAnnotationUpdate);
            expect(annotationService.getById).toHaveBeenCalled();
            expect(save).toHaveBeenCalled();
            expect(result.feature).toEqual("editado");

        });
    })


    describe('deleteById', () => {
        it('delete annotation by id from user', async () => {
            annotationRepository.delete.mockResolvedValue({effect : 1});
            expect(annotationRepository.delete).not.toHaveBeenCalled();
            await annotationService.deleteById(1, mockUser);
            expect(annotationRepository.delete).toHaveBeenCalled();
        });

        it('DONT get annotation by id from user', () => {
            annotationRepository.delete.mockResolvedValue({affect: 0});
            expect(annotationService.deleteById(1, mockUser)).rejects.toThrow(NotFoundException);
        });

    })



});


