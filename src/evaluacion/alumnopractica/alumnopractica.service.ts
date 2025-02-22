import { Injectable } from '@nestjs/common';
import { CreateAlumnopracticaDto } from './dto/create-alumnopractica.dto';
import { UpdateAlumnopracticaDto } from './dto/update-alumnopractica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoRealizaPractica } from './entities/alumnopractica.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AlumnopracticaService {
  constructor(
    @InjectRepository(AlumnoRealizaPractica,'base1')
    private alumnopracticaRepository: Repository<AlumnoRealizaPractica>,
  ){}
  async create(createAlumnopracticaDto: CreateAlumnopracticaDto) {
    const alumnopractica = this.alumnopracticaRepository.create(createAlumnopracticaDto);
    return this.alumnopracticaRepository.save(alumnopractica);
  }

  async findAll():Promise<AlumnoRealizaPractica[]> {
    return this.alumnopracticaRepository.find();
  }

  async findOne(id: number):Promise<AlumnoRealizaPractica> {
    return this.alumnopracticaRepository.findOne({where:{id_alumno:id}});
  }

  async update(id: number, updateAlumnopracticaDto: UpdateAlumnopracticaDto):Promise<string> {
    const alumnopractica =await this.findOne(id);
    this.alumnopracticaRepository.merge(alumnopractica,updateAlumnopracticaDto);
    this.alumnopracticaRepository.save(alumnopractica); 
    return `La nota del alumno #${id} ha sido actualizada`;
  }

  async remove(id: number):Promise<string> {
    const alumnopractica = await this.findOne(id);
    this.alumnopracticaRepository.remove(alumnopractica);
    return `La nota del alumno #${id} has sido eliminada`;
  }
}
