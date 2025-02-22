import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor,'base1')
    private profesorRepository: Repository<Profesor>,
  ){}
  async create(createProfesorDto: CreateProfesorDto) {
    const profesor = this.profesorRepository.create(createProfesorDto);
    return this.profesorRepository.save(profesor);
  }

  async findAll():Promise<Profesor[]> {
    return this.profesorRepository.find();
  }

  async findOne(id: number):Promise<Profesor> {
    return this.profesorRepository.findOne({where:{id}});
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto):Promise<string> {
    const profesor =await this.findOne(id);
    this.profesorRepository.merge(profesor,updateProfesorDto);
    this.profesorRepository.save(profesor);
    return `The profesor #${id} ha sido modificado`;	
  }

  async remove(id: number):Promise<string> {
    const profesor = await this.findOne(id);
    this.profesorRepository.remove(profesor);
    return `The profesor #${id} ha sido eliminado`;
  }
}
