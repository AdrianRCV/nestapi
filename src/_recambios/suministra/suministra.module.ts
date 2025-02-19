import { Module } from '@nestjs/common';
import { SuministraService } from './suministra.service';
import { SuministraController } from './suministra.controller';

@Module({
  controllers: [SuministraController],
  providers: [SuministraService],
})
export class SuministraModule {}
