import { features } from "process";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Features } from "../features.entity";

@Entity('subfeatures')
export class SubFeatures extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    descricao: string;

    @ManyToOne(type => Features)
    @JoinColumn({name: "id_feature"})
    feature: Features;

    @Column()
    id_feature: number;

}