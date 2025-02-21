import { Module } from '@nestjs/common';
import { AlumnopracticaService } from './alumnopractica.service';
import { AlumnopracticaController } from './alumnopractica.controller';

@Module({
  controllers: [AlumnopracticaController],
  providers: [AlumnopracticaService],
})
export class AlumnopracticaModule {}
