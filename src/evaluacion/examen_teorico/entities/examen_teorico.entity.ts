import { Profesor } from 'src/evaluacion/profesor/entities/profesor.entity';
import { Column,OneToMany , Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Alumnoexamen } from 'src/evaluacion/alumnoexamen/entities/alumnoexamen.entity';

@Entity()
export class ExamenTeorico {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titulo: string;
    @Column()   
    numeroPreguntas: number;
    @Column()
    fecha: Date;

    @ManyToOne(() => Profesor, profesor => profesor.examenteorico)
    @JoinColumn({ name: "id_profesor" })
    profesor: Profesor;

    @OneToMany(() => Alumnoexamen, alumnoExamen => alumnoExamen.examenteorico)
    alumnoExamenes: Alumnoexamen[];
}
