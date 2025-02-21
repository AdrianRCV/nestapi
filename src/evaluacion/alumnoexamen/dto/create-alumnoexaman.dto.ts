import { Min } from "class-validator";

export class CreateAlumnoexamanDto {
    id_alumno: number;
    id_examen: number;
    @Min(0,{message: 'La nota solo puede ser positiva'})
    nota: number;
}
