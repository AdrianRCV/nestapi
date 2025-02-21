import { Injectable } from '@nestjs/common';
import { CreateAlumnoexamanDto } from './dto/create-alumnoexaman.dto';
import { UpdateAlumnoexamanDto } from './dto/update-alumnoexaman.dto';

@Injectable()
export class AlumnoexamenService {
  create(createAlumnoexamanDto: CreateAlumnoexamanDto) {
    return 'This action adds a new alumnoexaman';
  }

  findAll() {
    return `This action returns all alumnoexamen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnoexaman`;
  }

  update(id: number, updateAlumnoexamanDto: UpdateAlumnoexamanDto) {
    return `This action updates a #${id} alumnoexaman`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnoexaman`;
  }
}
