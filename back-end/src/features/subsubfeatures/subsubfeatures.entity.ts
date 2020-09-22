import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SubFeatures } from "../subfeatures/subfeature.entity";


@Entity('subsubfeatures')
export class SubSubFeatures extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @ManyToOne(type => SubFeatures)
    @JoinColumn({name: "id_subfeature"})
    subfeature: SubFeatures;

    @Column()
    id_subfeature: number;

}