import { Anotacoes } from "../annotations/annotations.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";

@Entity()
@Unique(['usuario'])
export class Usuarios extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    usuario: string;

    @Column()
    senha: string;

    @OneToMany(type => Anotacoes, anotacoes => anotacoes.usuario, { eager: true })
    anotacoes: Anotacoes[];

    async validatePassword(password: string): Promise<boolean>{
        return password === this.senha;
    }
    
}