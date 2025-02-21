import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoexamanDto } from './create-alumnoexaman.dto';

export class UpdateAlumnoexamanDto extends PartialType(CreateAlumnoexamanDto) {}
