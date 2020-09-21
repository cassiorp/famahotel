import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Features } from './features.entity';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {
    constructor(
        private featureService: FeaturesService
    ){}

    @Get()
    getAllFeatures(): Promise<Features[]>{
        return this.featureService.getAllFeatures();
    }
}
