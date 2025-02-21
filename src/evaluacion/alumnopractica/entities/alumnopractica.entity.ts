import { Alumno } from "src/evaluacion/alumno/entities/alumno.entity";
import { Practica } from "src/evaluacion/practica/entities/practica.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class AlumnoRealizaPractica {
    @PrimaryColumn()
    id_alumno: number;
    @PrimaryColumn()
    id_practica: number;
    @Column()
    fecha: Date;
    @Column()
    nota: string;

    @ManyToOne(() => Alumno, alumno => alumno.alumnoRealizaPracticas)
    @JoinColumn({ name: "id_alumno" })
    alumno: Alumno;

    @ManyToOne(() => Practica, practica => practica.alumnoRealizaPracticas)
    @JoinColumn({ name: "id_practica" })
    practica: Practica;
}
