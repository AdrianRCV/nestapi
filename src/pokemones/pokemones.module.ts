import { Module } from '@nestjs/common';
import { PokemonesService } from './pokemones.service';
import { PokemonesController } from './pokemones.controller';

@Module({
  controllers: [PokemonesController],
  providers: [PokemonesService],
})
export class PokemonesModule {}
