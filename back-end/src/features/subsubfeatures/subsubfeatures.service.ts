import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubSubFeatures } from './subsubfeatures.entity';
import { SubSubFeatureRepository } from './subsubfeatures.repository';

@Injectable()
export class SubsubfeaturesService {
    constructor(
        @InjectRepository(SubSubFeatureRepository)
        private subsubRepository: SubSubFeatureRepository,
    ){}

    async getAllSubSubFeatures(): Promise<SubSubFeatures[]> {
        return await this.subsubRepository.find();
    }

    async getSubSubFeatureByIdSubFeature(id: number): Promise<SubSubFeatures[]> {
        return await this.subsubRepository.find({where : { id_subfeature: id }})
    }
}
