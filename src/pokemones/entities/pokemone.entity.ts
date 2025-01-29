import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pokemone {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 50 })
    pokemon: string;
    @Column({ type: 'varchar', length: 50 })
    tipo: string;
    @Column()
    HP: number;
    @Column()
    Ataque: number;
    @Column()
    Defensa: number;
}
