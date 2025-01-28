import { Injectable } from '@nestjs/common';
import { CreatePokemoneDto } from './dto/create-pokemone.dto';
import { UpdatePokemoneDto } from './dto/update-pokemone.dto';

@Injectable()
export class PokemonesService {
  create(createPokemoneDto: CreatePokemoneDto) {
    return 'This action adds a new pokemone';
  }

  findAll() {
    return `This action returns all pokemones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemone`;
  }

  update(id: number, updatePokemoneDto: UpdatePokemoneDto) {
    return `This action updates a #${id} pokemone`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemone`;
  }
}
