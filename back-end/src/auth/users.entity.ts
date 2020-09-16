import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

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


    async validatePassword(password: string): Promise<boolean>{
        return password === this.senha;
    }
}