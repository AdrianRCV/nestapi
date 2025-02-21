import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorpracticaService } from './profesorpractica.service';
import { CreateProfesorpracticaDto } from './dto/create-profesorpractica.dto';
import { UpdateProfesorpracticaDto } from './dto/update-profesorpractica.dto';

@Controller('profesorpractica')
export class ProfesorpracticaController {
  constructor(private readonly profesorpracticaService: ProfesorpracticaService) {}

  @Post()
  create(@Body() createProfesorpracticaDto: CreateProfesorpracticaDto) {
    return this.profesorpracticaService.create(createProfesorpracticaDto);
  }

  @Get()
  findAll() {
    return this.profesorpracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorpracticaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesorpracticaDto: UpdateProfesorpracticaDto) {
    return this.profesorpracticaService.update(+id, updateProfesorpracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorpracticaService.remove(+id);
  }
}
