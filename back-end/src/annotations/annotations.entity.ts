import { type } from "os";
import { Usuarios } from "src/auth/users.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

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

  @ManyToOne(type => Usuarios, usuario => usuario.anotacoes, { eager: false })
  usuario: Usuarios;

  @Column()
  usuarioId: number;

}