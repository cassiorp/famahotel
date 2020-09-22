import { EntityRepository, Repository } from "typeorm";
import { SubSubFeatures } from "./subsubfeatures.entity";


@EntityRepository(SubSubFeatures)
export class SubSubFeatureRepository extends Repository<SubSubFeatures> {
}