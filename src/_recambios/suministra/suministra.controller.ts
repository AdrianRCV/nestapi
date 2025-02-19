import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuministraService } from './suministra.service';
import { CreateSuministraDto } from './dto/create-suministra.dto';
import { UpdateSuministraDto } from './dto/update-suministra.dto';

@Controller('suministra')
export class SuministraController {
  constructor(private readonly suministraService: SuministraService) {}

  @Post()
  create(@Body() createSuministraDto: CreateSuministraDto) {
    return this.suministraService.create(createSuministraDto);
  }

  @Get()
  findAll() {
    return this.suministraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suministraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuministraDto: UpdateSuministraDto) {
    return this.suministraService.update(+id, updateSuministraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suministraService.remove(+id);
  }
}
