import { Module } from '@nestjs/common';
import { ExamenTeoricoService } from './examen_teorico.service';
import { ExamenTeoricoController } from './examen_teorico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenTeorico } from './entities/examen_teorico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenTeorico],'base1')],
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
})
export class ExamenTeoricoModule {}
