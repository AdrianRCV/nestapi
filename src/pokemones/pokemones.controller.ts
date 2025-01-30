import { Controller, Get, Post, Body, Query, Param, Delete, Put } from '@nestjs/common';
import { PokemonesService } from './pokemones.service';
import { CreatePokemoneDto } from './dto/create-pokemone.dto';
import { UpdatePokemoneDto } from './dto/update-pokemone.dto';
import { Pokemone } from './entities/pokemone.entity';

@Controller('pokemones')
export class PokemonesController {
  constructor(private readonly pokemonesService: PokemonesService) {}

  @Post()
  async create(@Body() createPokemoneDto: CreatePokemoneDto):Promise<Pokemone> {
    return this.pokemonesService.create(createPokemoneDto);
  }

  @Get()
  async findAll():Promise<Pokemone[]> {
    return this.pokemonesService.findAll();
  }

  @Get('query1')
  async rutaQuery(@Query('tipo') tipo:string):Promise<Pokemone[]>{
        return this.pokemonesService.buscaTipo(tipo);
  }

  @Get('query2')
  async ruta(@Query('hp') hp:number):Promise<Pokemone[]>{
        return this.pokemonesService.buscaHP(hp);
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Pokemone> {
    return this.pokemonesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePokemoneDto: UpdatePokemoneDto):Promise<string> {
    return this.pokemonesService.update(+id, updatePokemoneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<string> {
    return this.pokemonesService.remove(+id);
  }
}
