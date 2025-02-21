import { IsString, Length } from "class-validator";

export class CreateAlumnoDto {
    @IsString()
    @Length(9, 9, { message: 'El NIF debe tener exactamente 9 caracteres' })
    nif: string;
    grupo: string;
    nombre: string; 
    apellido1: string;
    apellido2: string;
}
