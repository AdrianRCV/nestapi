import { Injectable } from '@nestjs/common';
import { CreateProfesorpracticaDto } from './dto/create-profesorpractica.dto';
import { UpdateProfesorpracticaDto } from './dto/update-profesorpractica.dto';

@Injectable()
export class ProfesorpracticaService {
  create(createProfesorpracticaDto: CreateProfesorpracticaDto) {
    return 'This action adds a new profesorpractica';
  }

  findAll() {
    return `This action returns all profesorpractica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesorpractica`;
  }

  update(id: number, updateProfesorpracticaDto: UpdateProfesorpracticaDto) {
    return `This action updates a #${id} profesorpractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesorpractica`;
  }
}
