import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class PeliculasService {
  constructor(
      @InjectRepository(Pelicula,'base1')
      private peliculasRepository:Repository<Pelicula>
    ){}
  async create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const pelicula=this.peliculasRepository.create(createPeliculaDto)
    return this.peliculasRepository.save(pelicula);
  }

  async findAll():Promise<Pelicula[]> {
    return this.peliculasRepository.find();
  }

  async findOne(id: number):Promise<Pelicula> {
    return this.peliculasRepository.findOne({where:{id}});
  }

  async update(id: number, updatePeliculaDto: UpdatePeliculaDto):Promise<string> {
    const pelicula=await this.findOne(id);
    this.peliculasRepository.merge(pelicula,updatePeliculaDto);
    this.peliculasRepository.save(pelicula);
    return `La pelicula con #${id} ha sido modificada`;
  }

  async remove(id: number):Promise<string> {
    const pelicula= await this.findOne(id);
    this.peliculasRepository.remove(pelicula);
    return `Pelicula #${id} ha sido eliminada`;
  }

  async buscaDirector(director:string):Promise<Pelicula[]>{
    return this.peliculasRepository.find({where:{director}})
  }

  async buscaAño(año:number):Promise<Pelicula[]>{
    return this.peliculasRepository.find({where:{año:MoreThan(año)}})
  }
}

