import { type } from "os";
import { Usuarios } from "../auth/users.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { AnnotationPolarity } from "./annotation-polarity.enum";

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
  polarity: AnnotationPolarity;

  @Column()
  exim: string;

  @Column()
  term: string;

  @ManyToOne(type => Usuarios, usuario => usuario.anotacoes, { eager: false })
  @JoinColumn({name: "id_usuario"})
  usuario: Usuarios;

  @Column()
  id_usuario: number;

}