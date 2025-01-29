import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 50 })
    titulo: string;
    @Column()
    director: string;
    @Column()
    año: number;
    @Column()
    duración: number;
}
