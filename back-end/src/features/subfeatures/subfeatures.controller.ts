import { Controller, Get } from '@nestjs/common';
import { SubFeatures } from './subfeature.entity';
import { SubfeaturesService } from './subfeatures.service';

@Controller('subfeatures')
export class SubfeaturesController {
    constructor(
        private subfeatureService: SubfeaturesService,
    ){}

    @Get()
    getAllSubFeatures(): Promise<SubFeatures[]> {
        return this.subfeatureService.getAllSubFeatures();
    }
}
