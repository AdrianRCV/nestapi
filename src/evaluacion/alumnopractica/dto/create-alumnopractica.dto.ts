import { Min } from "class-validator";

export class CreateAlumnopracticaDto {
    id_alumno: number;
    id_practica: number;
    fecha: Date;
    @Min(0,{message: 'La nota solo puede ser positiva'})
    nota: string;
}
