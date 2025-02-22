import { Injectable } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica,'base1')
    private practicaRepository: Repository<Practica>,
  ) {}  
  async create(createPracticaDto: CreatePracticaDto):Promise<Practica> {
    const practica = this.practicaRepository.create(createPracticaDto);
    return this.practicaRepository.save(practica);
  }

  async findAll():Promise<Practica[]> {
    return this.practicaRepository.find();
  }

  async findOne(id: number):Promise<Practica> {
    return this.practicaRepository.findOne({where:{id}});
  }

  async update(id: number, updatePracticaDto: UpdatePracticaDto):Promise<any> {
    const practica =await this.findOne(id);
    this.practicaRepository.merge(practica,updatePracticaDto);
    this.practicaRepository.save(practica);
    return `La practica #${id} ha sido modificada`;
  }

  async remove(id: number):Promise<string> {
    const practica = await this.findOne(id);
    this.practicaRepository.remove(practica);
    return `La practica #${id} ha sido eliminada`;
  }
}
