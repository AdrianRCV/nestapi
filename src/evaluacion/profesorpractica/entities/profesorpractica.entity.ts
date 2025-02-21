import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Profesor } from 'src/evaluacion/profesor/entities/profesor.entity';
import { Practica } from 'src/evaluacion/practica/entities/practica.entity';

@Entity()
export class Profesorpractica {
    @PrimaryColumn()
    id_profesor: number;
    @PrimaryColumn()
    id_practica: number;

    @ManyToOne(() => Profesor, profesor => profesor.profesorPracticas)
    @JoinColumn({ name: "id_profesor" })
    profesor: Profesor;

    @ManyToOne(() => Practica, practica => practica.profesorPracticas)
    @JoinColumn({ name: "id_practica" })
    practica: Practica;

    @Column()
    fecha: Date;
}
