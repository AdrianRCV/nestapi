import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnopracticaDto } from './create-alumnopractica.dto';
import { Min } from 'class-validator';

export class UpdateAlumnopracticaDto extends PartialType(CreateAlumnopracticaDto) {
    id_alumno: number;
    id_practica: number;
    fecha: Date;
    @Min(0,{message: 'La nota solo puede ser positiva'})
    nota: string;
}
