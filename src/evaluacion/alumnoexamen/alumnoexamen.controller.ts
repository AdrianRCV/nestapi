import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoexamenService } from './alumnoexamen.service';
import { CreateAlumnoexamanDto } from './dto/create-alumnoexaman.dto';
import { UpdateAlumnoexamanDto } from './dto/update-alumnoexaman.dto';

@Controller('alumnoexamen')
export class AlumnoexamenController {
  constructor(private readonly alumnoexamenService: AlumnoexamenService) {}

  @Post()
  create(@Body() createAlumnoexamanDto: CreateAlumnoexamanDto) {
    return this.alumnoexamenService.create(createAlumnoexamanDto);
  }

  @Get()
  findAll() {
    return this.alumnoexamenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoexamenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoexamanDto: UpdateAlumnoexamanDto) {
    return this.alumnoexamenService.update(+id, updateAlumnoexamanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoexamenService.remove(+id);
  }
}
