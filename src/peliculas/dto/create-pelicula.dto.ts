import { Min } from 'class-validator';
export class CreatePeliculaDto {
    titulo: string;
    director: string;
    @Min(0,{message:"El año solo puede ser positivo"})
    año: number;
    @Min(0,{message:"La duración solo puede ser positivo"})
    duración: number;
}

