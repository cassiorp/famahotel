import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Features } from './features.entity';
import { FeaturesService } from './features.service';
import { SubFeatures } from './subfeatures/subfeature.entity';
import { SubfeaturesService } from './subfeatures/subfeatures.service';
import { SubSubFeatures } from './subsubfeatures/subsubfeatures.entity';
import { SubsubfeaturesService } from './subsubfeatures/subsubfeatures.service';

@Controller('features')
export class FeaturesController {
    constructor(
        private featureService: FeaturesService,
        private subFeatureService: SubfeaturesService,
        private subsubFeatureService: SubsubfeaturesService
    ) { }

    @Get()
    getAllFeatures(): Promise<Features[]> {
        return this.featureService.getAllFeatures();
    }

}
