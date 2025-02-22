import { Module } from '@nestjs/common';
import { ProfesorpracticaService } from './profesorpractica.service';
import { ProfesorpracticaController } from './profesorpractica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesorpractica } from './entities/profesorpractica.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Profesorpractica], 'default')],
  controllers: [ProfesorpracticaController],
  providers: [ProfesorpracticaService],
})
export class ProfesorpracticaModule {}
