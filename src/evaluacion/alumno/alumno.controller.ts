import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  async create(@Body() createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    return this.alumnoService.create(createAlumnoDto);
  }

  @Get()
  async findAll(): Promise<Alumno[]> {
    return this.alumnoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Alumno> {
    return this.alumnoService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateAlumnoDto: UpdateAlumnoDto): Promise<string> {
    return this.alumnoService.update(id, updateAlumnoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return this.alumnoService.remove(id);
  }
}
