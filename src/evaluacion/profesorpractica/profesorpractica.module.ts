import { Module } from '@nestjs/common';
import { ProfesorpracticaService } from './profesorpractica.service';
import { ProfesorpracticaController } from './profesorpractica.controller';

@Module({
  controllers: [ProfesorpracticaController],
  providers: [ProfesorpracticaService],
})
export class ProfesorpracticaModule {}
