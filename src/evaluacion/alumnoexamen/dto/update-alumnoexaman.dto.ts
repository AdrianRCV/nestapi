import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoexamanDto } from './create-alumnoexaman.dto';
import { Min } from "class-validator";

export class UpdateAlumnoexamanDto extends PartialType(CreateAlumnoexamanDto) {
    id_alumno: number;
    id_examen: number;
    @Min(0,{message: 'La nota solo puede ser positiva'})
    nota: number;
}
