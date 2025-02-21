import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AlumnoRealizaPractica } from 'src/evaluacion/alumnopractica/entities/alumnopractica.entity';
import { Alumnoexamen } from 'src/evaluacion/alumnoexamen/entities/alumnoexamen.entity';

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nif: string;
    @Column()
    grupo: string;
    @Column()
    nombre: string;
    @Column()
    apellido1: string;
    @Column()
    apellido2: string;

    @OneToMany(() => AlumnoRealizaPractica, arp =>arp.alumno)
    alumnoRealizaPracticas: AlumnoRealizaPractica[];

    @OneToMany(() => Alumnoexamen, alumnoExamen => alumnoExamen.alumno)
    alumnoExamenes: Alumnoexamen[];
}
