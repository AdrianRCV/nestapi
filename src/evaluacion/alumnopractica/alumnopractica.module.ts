import { Module } from '@nestjs/common';
import { AlumnopracticaService } from './alumnopractica.service';
import { AlumnopracticaController } from './alumnopractica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoRealizaPractica } from './entities/alumnopractica.entity';

@Module({
  imports : [TypeOrmModule.forFeature([AlumnoRealizaPractica], 'base1')],
  controllers: [AlumnopracticaController],
  providers: [AlumnopracticaService],
})
export class AlumnopracticaModule {}
