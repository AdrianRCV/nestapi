import { Module } from '@nestjs/common';
import { ProductotallaService } from './productotalla.service';
import { ProductotallaController } from './productotalla.controller';

@Module({
  controllers: [ProductotallaController],
  providers: [ProductotallaService],
})
export class ProductotallaModule {}
