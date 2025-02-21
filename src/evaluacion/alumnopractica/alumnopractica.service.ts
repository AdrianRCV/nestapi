import { Injectable } from '@nestjs/common';
import { CreateAlumnopracticaDto } from './dto/create-alumnopractica.dto';
import { UpdateAlumnopracticaDto } from './dto/update-alumnopractica.dto';

@Injectable()
export class AlumnopracticaService {
  create(createAlumnopracticaDto: CreateAlumnopracticaDto) {
    return 'This action adds a new alumnopractica';
  }

  findAll() {
    return `This action returns all alumnopractica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnopractica`;
  }

  update(id: number, updateAlumnopracticaDto: UpdateAlumnopracticaDto) {
    return `This action updates a #${id} alumnopractica`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnopractica`;
  }
}
