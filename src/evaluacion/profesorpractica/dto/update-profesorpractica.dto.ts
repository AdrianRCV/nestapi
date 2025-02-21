import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorpracticaDto } from './create-profesorpractica.dto';

export class UpdateProfesorpracticaDto extends PartialType(CreateProfesorpracticaDto) {}
