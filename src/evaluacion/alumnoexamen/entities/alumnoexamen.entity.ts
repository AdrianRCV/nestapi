import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Alumno } from 'src/evaluacion/alumno/entities/alumno.entity';
import { ExamenTeorico } from 'src/evaluacion/examen_teorico/entities/examen_teorico.entity';

@Entity()
export class Alumnoexamen {
    @PrimaryColumn()
    id_alumno: number;
    @PrimaryColumn()
    id_examen: number;

    @ManyToOne(() => Alumno, alumno => alumno.alumnoExamenes)
    @JoinColumn({ name: "id_alumno" })
    alumno: Alumno;

    @ManyToOne(() => ExamenTeorico, examenteorico => examenteorico.alumnoExamenes)
    @JoinColumn({ name: "id_examen" })
    examenteorico: ExamenTeorico;

    @Column()   
    nota: number;
}
