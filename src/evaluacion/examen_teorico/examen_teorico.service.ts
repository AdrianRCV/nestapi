import { Injectable } from '@nestjs/common';
import { CreateExamenTeoricoDto } from './dto/create-examen_teorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examen_teorico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamenTeorico } from './entities/examen_teorico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamenTeoricoService {
  constructor(
    @InjectRepository(ExamenTeorico,'base1')
    private examenTeoricoRepository: Repository<ExamenTeorico>,
  ) {}
  async create(createExamenTeoricoDto: CreateExamenTeoricoDto):Promise<ExamenTeorico> {
    const examenTeorico = this.examenTeoricoRepository.create(createExamenTeoricoDto);
    return this.examenTeoricoRepository.save(examenTeorico);
  }

  async findAll():Promise<ExamenTeorico[]> {
    return this.examenTeoricoRepository.find();
  }

  async findOne(id: number):Promise<ExamenTeorico> {
    return this.examenTeoricoRepository.findOne({where:{id}});
  }

  async update(id: number, updateExamenTeoricoDto: UpdateExamenTeoricoDto):Promise<any> {
    const examenTeorico =await this.findOne(id);
    this.examenTeoricoRepository.merge(examenTeorico,updateExamenTeoricoDto);
    this.examenTeoricoRepository.save(examenTeorico);
    return `El examenTeorico #${id} ha sido modificado`;
  }

  async remove(id: number):Promise<string> {
    const examenTeorico = await this.findOne(id);
    this.examenTeoricoRepository.remove(examenTeorico);
    return `El examenTeorico #${id} ha sido eliminado`;
  }
}
