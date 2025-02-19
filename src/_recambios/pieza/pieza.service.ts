import { Injectable } from '@nestjs/common';
import { CreatePiezaDto } from './dto/create-pieza.dto';
import { UpdatePiezaDto } from './dto/update-pieza.dto';

@Injectable()
export class PiezaService {
  create(createPiezaDto: CreatePiezaDto) {
    return 'This action adds a new pieza';
  }

  findAll() {
    return `This action returns all pieza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pieza`;
  }

  update(id: number, updatePiezaDto: UpdatePiezaDto) {
    return `This action updates a #${id} pieza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pieza`;
  }
}
