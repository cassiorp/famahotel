import { Repository, EntityRepository } from "typeorm";
import { Features } from "./features.entity";



@EntityRepository(Features)
export class FeatureRepository extends Repository<Features> {
}