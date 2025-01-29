import { Module } from '@nestjs/common';
import { PokemonesService } from './pokemones.service';
import { PokemonesController } from './pokemones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemone } from './entities/pokemone.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pokemone],"base1")],
  controllers: [PokemonesController],
  providers: [PokemonesService],
})
export class PokemonesModule {}
