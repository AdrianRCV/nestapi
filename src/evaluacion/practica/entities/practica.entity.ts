import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AlumnoRealizaPractica } from 'src/evaluacion/alumnopractica/entities/alumnopractica.entity';
import { Profesorpractica } from 'src/evaluacion/profesorpractica/entities/profesorpractica.entity';

@Entity()
export class Practica {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titulo: string;
    @Column()
    dificultad: string;

    @OneToMany(() => AlumnoRealizaPractica, arp => arp.practica)
    alumnoRealizaPracticas: AlumnoRealizaPractica[];

    @OneToMany(() => Profesorpractica, profesorPractica => profesorPractica.practica)
    profesorPracticas: Profesorpractica[];
}

