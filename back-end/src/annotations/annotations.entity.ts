import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Anotacoes extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @Column()
  feature: string;

  @Column()
  subfeature: string;

  @Column()
  subsubfeature: string;

  @Column()
  polarity: string;

  @Column()
  exim: string;

  @Column()
  term: string;

  @Column()
  id_usuario: number;

}