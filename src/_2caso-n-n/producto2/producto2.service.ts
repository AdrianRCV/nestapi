import { Injectable } from '@nestjs/common';
import { CreateProducto2Dto } from './dto/create-producto2.dto';
import { UpdateProducto2Dto } from './dto/update-producto2.dto';

@Injectable()
export class Producto2Service {
  create(createProducto2Dto: CreateProducto2Dto) {
    return 'This action adds a new producto2';
  }

  findAll() {
    return `This action returns all producto2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto2`;
  }

  update(id: number, updateProducto2Dto: UpdateProducto2Dto) {
    return `This action updates a #${id} producto2`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto2`;
  }
}
