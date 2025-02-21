import { Injectable } from '@nestjs/common';
import { CreateAlumnoexamanDto } from './dto/create-alumnoexaman.dto';
import { UpdateAlumnoexamanDto } from './dto/update-alumnoexaman.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumnoexamen } from './entities/alumnoexamen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnoexamenService {
  constructor(
    @InjectRepository(Alumnoexamen,'base1')
    private alumnoexamenRepository: Repository<Alumnoexamen>,
  ){}
  async create(createAlumnoexamanDto: CreateAlumnoexamanDto):Promise<Alumnoexamen> {
    const alumnoexaman = this.alumnoexamenRepository.create(createAlumnoexamanDto);
    return this.alumnoexamenRepository.save(alumnoexaman);
  }

  async findAll():Promise<Alumnoexamen[]> {
    return this.alumnoexamenRepository.find();
  }

  async findOne(id: number):Promise<Alumnoexamen> {
    return this.alumnoexamenRepository.findOne({where:{id_alumno:id}});
  }

  async update(id: number, updateAlumnoexamanDto: UpdateAlumnoexamanDto):Promise<string> {
    const alumnoexaman =await this.findOne(id);
    this.alumnoexamenRepository.merge(alumnoexaman,updateAlumnoexamanDto);
    this.alumnoexamenRepository.save(alumnoexaman);
    return `La nota del alumno #${id} ha sido actualizada`;
  }

  async remove(id: number):Promise<string> {
    const alumnoexaman = await this.findOne(id);
    this.alumnoexamenRepository.remove(alumnoexaman);
    return `La nota del alumno #${id} has sido eliminada`;
  }
}
