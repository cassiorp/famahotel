import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubFeatures } from "./subfeatures/subfeature.entity";

@Entity()
export class Features extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    descricao: string;

}