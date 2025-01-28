import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemoneDto } from './create-pokemone.dto';

export class UpdatePokemoneDto extends PartialType(CreatePokemoneDto) {}
