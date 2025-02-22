import { Injectable } from '@nestjs/common';
import { CreateProfesorpracticaDto } from './dto/create-profesorpractica.dto';
import { UpdateProfesorpracticaDto } from './dto/update-profesorpractica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesorpractica } from './entities/profesorpractica.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorpracticaService {
  constructor(
    @InjectRepository(Profesorpractica,'base1')
    private profesorpracticaRepository: Repository<Profesorpractica>,
  ) {}
  async create(createProfesorpracticaDto: CreateProfesorpracticaDto):Promise<Profesorpractica> {
    const profesorpractica = this.profesorpracticaRepository.create(createProfesorpracticaDto);
    return this.profesorpracticaRepository.save(profesorpractica);
  }

  async findAll():Promise<Profesorpractica[]> {
    return this.profesorpracticaRepository.find();
  }

  async findOne(id: number):Promise<Profesorpractica> {
    return this.profesorpracticaRepository.findOne({where:{id_profesor:id}});
  }

  async update(id: number, updateProfesorpracticaDto: UpdateProfesorpracticaDto):Promise<string> {
    const profesorpractica =await this.findOne(id);
    this.profesorpracticaRepository.merge(profesorpractica,updateProfesorpracticaDto);
    this.profesorpracticaRepository.save(profesorpractica);
    return `La fecha de la practica #${id} ha sido modificada`;
  }

  async remove(id: number):Promise<string> {
    const profesorpractica = await this.findOne(id);
    this.profesorpracticaRepository.remove(profesorpractica);
    return `La fecha de la practica #${id} ha sido eliminada`;
  }
}
