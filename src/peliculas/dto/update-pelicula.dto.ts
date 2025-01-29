import { PartialType } from '@nestjs/mapped-types';
import { CreatePeliculaDto } from './create-pelicula.dto';
import { Min } from 'class-validator';

export class UpdatePeliculaDto extends PartialType(CreatePeliculaDto) {
    titulo: string;
    director: string;
    @Min(0,{message:"El año solo puede ser positivo"})
    año: number;
    @Min(0,{message:"La duración solo puede ser positivo"})
    duración: number;
}
