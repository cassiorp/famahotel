import { EntityRepository, Repository } from "typeorm";
import { SubFeatures } from "./subfeature.entity";


@EntityRepository(SubFeatures)
export class SubFeatureRepository extends Repository<SubFeatures> {
    
}