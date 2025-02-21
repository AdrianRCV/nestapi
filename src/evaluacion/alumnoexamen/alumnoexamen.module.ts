import { Module } from '@nestjs/common';
import { AlumnoexamenService } from './alumnoexamen.service';
import { AlumnoexamenController } from './alumnoexamen.controller';

@Module({
  controllers: [AlumnoexamenController],
  providers: [AlumnoexamenService],
})
export class AlumnoexamenModule {}
