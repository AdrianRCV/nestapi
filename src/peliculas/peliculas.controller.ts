import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  async create(@Body() createPeliculaDto: CreatePeliculaDto):Promise<Pelicula> {
    return this.peliculasService.create(createPeliculaDto);
  }

  @Get()
  async findAll():Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }
  @Get('query1')
  async rutaQuery(@Query('director') director:string):Promise<Pelicula[]>{
        return this.peliculasService.buscaDirector(director);
  }

  @Get('query2')
  async ruta(@Query('año') año:number):Promise<Pelicula[]>{
        return this.peliculasService.buscaAño(año);
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Pelicula> {
    return this.peliculasService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePeliculaDto: UpdatePeliculaDto):Promise<string> {
    return this.peliculasService.update(+id, updatePeliculaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<string> {
    return this.peliculasService.remove(+id);
  }

  
}


  
