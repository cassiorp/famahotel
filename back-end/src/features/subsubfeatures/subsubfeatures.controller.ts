import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SubSubFeatures } from './subsubfeatures.entity';
import { SubsubfeaturesService } from './subsubfeatures.service';

@Controller('subsubfeatures')
export class SubsubfeaturesController {
    constructor(
        private subsubFeatureService: SubsubfeaturesService,
    ){}

    @Get()
    getAllSubSubFeautures(): Promise<SubSubFeatures[]> {
        return this.subsubFeatureService.getAllSubSubFeatures();
    }

    @Get('/:id')
    getSubSubFeaturesByIdFeature(
        @Param('id', ParseIntPipe) id: number
    ): Promise<SubSubFeatures[]> {
        return this.subsubFeatureService.getSubSubFeatureByIdSubFeature(id);
    }
}
