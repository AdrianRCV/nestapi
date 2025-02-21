import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno,'base1')
    private alumnoRepository: Repository<Alumno>,
  ){}
  async create(createAlumnoDto: CreateAlumnoDto):Promise<Alumno> {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }

  async findAll():Promise<Alumno[]> {
    return this.alumnoRepository.find();
  }

  async findOne(id: number):Promise<Alumno> {
    return this.alumnoRepository.findOne({where:{id}});
  }

  async update(id: number, updateAlumnoDto: UpdateAlumnoDto):Promise<string> {
    const alumno =await this.findOne(id);
    this.alumnoRepository.merge(alumno,updateAlumnoDto);
    this.alumnoRepository.save(alumno);
    return `El alumno #${id} ha sido modificado`;
  }

  async remove(id: number):Promise<string> {
    const alumno = await this.findOne(id);
    this.alumnoRepository.remove(alumno);
    return `El alumno #${id} ha sido eliminado`;
  }
}
