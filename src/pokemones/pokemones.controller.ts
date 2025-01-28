import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonesService } from './pokemones.service';
import { CreatePokemoneDto } from './dto/create-pokemone.dto';
import { UpdatePokemoneDto } from './dto/update-pokemone.dto';

@Controller('pokemones')
export class PokemonesController {
  constructor(private readonly pokemonesService: PokemonesService) {}

  @Post()
  create(@Body() createPokemoneDto: CreatePokemoneDto) {
    return this.pokemonesService.create(createPokemoneDto);
  }

  @Get()
  findAll() {
    return this.pokemonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemoneDto: UpdatePokemoneDto) {
    return this.pokemonesService.update(+id, updatePokemoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonesService.remove(+id);
  }
}
