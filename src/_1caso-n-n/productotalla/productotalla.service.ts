import { Injectable } from '@nestjs/common';
import { CreateProductotallaDto } from './dto/create-productotalla.dto';
import { UpdateProductotallaDto } from './dto/update-productotalla.dto';

@Injectable()
export class ProductotallaService {
  create(createProductotallaDto: CreateProductotallaDto) {
    return 'This action adds a new productotalla';
  }

  findAll() {
    return `This action returns all productotalla`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productotalla`;
  }

  update(id: number, updateProductotallaDto: UpdateProductotallaDto) {
    return `This action updates a #${id} productotalla`;
  }

  remove(id: number) {
    return `This action removes a #${id} productotalla`;
  }
}
