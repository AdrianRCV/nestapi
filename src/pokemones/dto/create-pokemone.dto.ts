import { Min } from "class-validator";
export class CreatePokemoneDto {
    pokemon: string;
    tipo: string;
    @Min(0,{message:"El hp no puede ser negativo"})
    HP: number;
    @Min(0,{message:"El ataque no puede ser negativo"})
    Ataque: number;
    @Min(0,{message:"La defensa no puede ser negativo"})
    Defensa: number;
}
