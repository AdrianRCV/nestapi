import { PartialType } from '@nestjs/mapped-types';
import { CreateExamenTeoricoDto } from './create-examen_teorico.dto';
import { Min } from 'class-validator';

export class UpdateExamenTeoricoDto extends PartialType(CreateExamenTeoricoDto) {
    titulo: string;
    @Min(0,{message: 'El numero de preguntas solo puede ser positivo'})
    numeroPreguntas: number;
    fecha: Date;
    id_profesor: number;
}
