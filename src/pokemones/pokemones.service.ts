import { Inject, Injectable } from '@nestjs/common';
import { CreatePokemoneDto } from './dto/create-pokemone.dto';
import { UpdatePokemoneDto } from './dto/update-pokemone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemone } from './entities/pokemone.entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class PokemonesService {
  constructor(
      @InjectRepository(Pokemone,'base1')
      private pokemonesRepository:Repository<Pokemone>
  ){}
  async create(createPokemoneDto: CreatePokemoneDto):Promise<Pokemone> {
    const pokemone=this.pokemonesRepository.create(createPokemoneDto)
    return this.pokemonesRepository.save(pokemone);
  }

  async findAll():Promise<Pokemone[]> {
    return this.pokemonesRepository.find();
  }

  async findOne(id: number):Promise<Pokemone> {
    return this.pokemonesRepository.findOne({where:{id}});
  }

  async update(id: number, updatePokemoneDto: UpdatePokemoneDto):Promise<string> {
    const pokemone=await this.findOne(id);
    this.pokemonesRepository.merge(pokemone,updatePokemoneDto);
    this.pokemonesRepository.save(pokemone);
    return `El pokemon #${id} ha sido modificado`;
  }

  async remove(id: number):Promise<string> {
    const pokemone= await this.findOne(id);
    this.pokemonesRepository.remove(pokemone);
    return `El pokemon #${id} ha sido eliminado`;
  }

  async buscaTipo(tipo:string):Promise<Pokemone[]>{
    return this.pokemonesRepository.find({where:{tipo}})
  }

  async buscaHP(hp:number):Promise<Pokemone[]>{
    return this.pokemonesRepository.find({where:{HP:MoreThan(hp)}})
  }
}
