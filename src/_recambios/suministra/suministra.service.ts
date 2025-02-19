import { Injectable } from '@nestjs/common';
import { CreateSuministraDto } from './dto/create-suministra.dto';
import { UpdateSuministraDto } from './dto/update-suministra.dto';

@Injectable()
export class SuministraService {
  create(createSuministraDto: CreateSuministraDto) {
    return 'This action adds a new suministra';
  }

  findAll() {
    return `This action returns all suministra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suministra`;
  }

  update(id: number, updateSuministraDto: UpdateSuministraDto) {
    return `This action updates a #${id} suministra`;
  }

  remove(id: number) {
    return `This action removes a #${id} suministra`;
  }
}
