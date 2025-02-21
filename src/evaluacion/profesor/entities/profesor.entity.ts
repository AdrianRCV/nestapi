import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExamenTeorico } from 'src/evaluacion/examen_teorico/entities/examen_teorico.entity';
import { Profesorpractica } from 'src/evaluacion/profesorpractica/entities/profesorpractica.entity';

@Entity()
export class Profesor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nif: string;
    @Column()
    nombre: string;
    @Column()
    apellido1: string;
    @Column()
    apellido2: string;

    @OneToMany(() => ExamenTeorico, examenteorico => examenteorico.profesor)
    examenteorico: ExamenTeorico[];

    @OneToMany(() => Profesorpractica, profesorPractica => profesorPractica.profesor)
    profesorPracticas: Profesorpractica[];

}
