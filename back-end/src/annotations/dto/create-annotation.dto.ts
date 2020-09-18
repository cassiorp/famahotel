import { IsNotEmpty } from 'class-validator';

export class CreateAnnotationDto {
    
    @IsNotEmpty()
    texto: string;

    @IsNotEmpty()
    feature: string;

    @IsNotEmpty()
    subfeature: string;

    @IsNotEmpty()
    subsubfeature: string;

    @IsNotEmpty()
    polarity: string;

    @IsNotEmpty()
    exim: string;

    @IsNotEmpty()
    term: string;
}