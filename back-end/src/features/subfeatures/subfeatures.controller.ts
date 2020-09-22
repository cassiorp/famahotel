import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SubFeatures } from './subfeature.entity';
import { SubfeaturesService } from './subfeatures.service';

@Controller('subfeatures')
export class SubfeaturesController {
    constructor(
        private subFeatureService: SubfeaturesService
    ) { }

    @Get()
    getAllSubFeautures(): Promise<SubFeatures[]> {
        return this.subFeatureService.getAllSubFeatures();
    }

    @Get('/:id')
    getSubFeaturesByIdFeature(
        @Param('id', ParseIntPipe) id: number
    ): Promise<SubFeatures[]> {
        return this.subFeatureService.getSubFeatureByIdFeature(id);
    }

}
