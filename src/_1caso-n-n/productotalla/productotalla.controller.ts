import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductotallaService } from './productotalla.service';
import { CreateProductotallaDto } from './dto/create-productotalla.dto';
import { UpdateProductotallaDto } from './dto/update-productotalla.dto';

@Controller('productotalla')
export class ProductotallaController {
  constructor(private readonly productotallaService: ProductotallaService) {}

  @Post()
  create(@Body() createProductotallaDto: CreateProductotallaDto) {
    return this.productotallaService.create(createProductotallaDto);
  }

  @Get()
  findAll() {
    return this.productotallaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productotallaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductotallaDto: UpdateProductotallaDto) {
    return this.productotallaService.update(+id, updateProductotallaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productotallaService.remove(+id);
  }
}
