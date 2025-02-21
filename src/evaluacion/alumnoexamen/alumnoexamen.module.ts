import { Module } from '@nestjs/common';
import { AlumnoexamenService } from './alumnoexamen.service';
import { AlumnoexamenController } from './alumnoexamen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnoexamen } from './entities/alumnoexamen.entity'; 

@Module({
  imports : [TypeOrmModule.forFeature([Alumnoexamen], 'base1')],
  controllers: [AlumnoexamenController],
  providers: [AlumnoexamenService],
})
export class AlumnoexamenModule {}
