import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Features } from './features.entity';
import { FeatureRepository } from './features.repository';



@Injectable()
export class FeaturesService {
    constructor(
        @InjectRepository(FeatureRepository)
        private featureRepository: FeatureRepository,
    ){}

    async getAllFeatures(): Promise<Features[]> {
        return await this.featureRepository.find();
    }


}
