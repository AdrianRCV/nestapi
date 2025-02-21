import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorDto } from './create-profesor.dto';
import { IsString, Length } from "class-validator";

export class UpdateProfesorDto extends PartialType(CreateProfesorDto) {
    @IsString()
    @Length(9, 9, { message: 'El NIF debe tener exactamente 9 caracteres' })
    nif: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
}
