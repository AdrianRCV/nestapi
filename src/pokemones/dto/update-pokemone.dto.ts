import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemoneDto } from './create-pokemone.dto';
import { Min } from 'class-validator';
export class UpdatePokemoneDto extends PartialType(CreatePokemoneDto) {
    pokemon: string;
    tipo: string;
    @Min(0,{message:"El hp no puede ser negativo"})
    HP: number;
    @Min(0,{message:"El ataque no puede ser negativo"})
    Ataque: number;
    @Min(0,{message:"La defensa no puede ser negativo"})
    Defensa: number;
}
