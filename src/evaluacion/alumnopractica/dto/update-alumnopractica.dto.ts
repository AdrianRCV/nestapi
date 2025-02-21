import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnopracticaDto } from './create-alumnopractica.dto';

export class UpdateAlumnopracticaDto extends PartialType(CreateAlumnopracticaDto) {}
