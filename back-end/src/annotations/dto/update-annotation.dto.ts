import { IsNotEmpty, IsIn } from 'class-validator';
import { AnnotationPolarity } from '../annotation-polarity.enum';

export class UpdateAnnotationDto {
    
    @IsNotEmpty()
    feature: string;

    @IsNotEmpty()
    subfeature: string;

    @IsNotEmpty()
    subsubfeature: string;

    @IsNotEmpty()
    @IsIn([AnnotationPolarity.positiva, AnnotationPolarity.neutra, AnnotationPolarity.negativa])
    polarity: AnnotationPolarity;

    @IsNotEmpty()
    exim: string;

    @IsNotEmpty()
    term: string;
    
}