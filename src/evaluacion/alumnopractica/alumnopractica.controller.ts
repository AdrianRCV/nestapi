import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnopracticaService } from './alumnopractica.service';
import { CreateAlumnopracticaDto } from './dto/create-alumnopractica.dto';
import { UpdateAlumnopracticaDto } from './dto/update-alumnopractica.dto';

@Controller('alumnopractica')
export class AlumnopracticaController {
  constructor(private readonly alumnopracticaService: AlumnopracticaService) {}

  @Post()
  create(@Body() createAlumnopracticaDto: CreateAlumnopracticaDto) {
    return this.alumnopracticaService.create(createAlumnopracticaDto);
  }

  @Get()
  findAll() {
    return this.alumnopracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnopracticaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnopracticaDto: UpdateAlumnopracticaDto) {
    return this.alumnopracticaService.update(+id, updateAlumnopracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnopracticaService.remove(+id);
  }
}
