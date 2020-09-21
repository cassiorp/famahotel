import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubFeatureRepository } from './feature.repository';
import { SubFeatures } from './subfeature.entity';

@Injectable()
export class SubfeaturesService {
    constructor(
        @InjectRepository(SubFeatureRepository)
        private subfeatureRepository: SubFeatureRepository,
    ){}

    async getAllSubFeatures(): Promise<SubFeatures[]> {
        return await this.subfeatureRepository.find();
    }
}
