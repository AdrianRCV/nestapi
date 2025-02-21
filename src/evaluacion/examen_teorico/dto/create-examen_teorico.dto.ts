import { Min } from 'class-validator';

export class CreateExamenTeoricoDto {
    titulo: string;
    @Min(0,{message: 'El numero de preguntas solo puede ser positivo'})
    numeroPreguntas: number;
    fecha: Date;
    id_profesor: number;
}
