import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],/**Se debe añadir para dejar que se hagan operaciones en el servidor(nest) desde next(cliente), esto solo es necesario porque el cliente y servidor se encuentran en la misma maquina */
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    });   
  await app.listen(process.env.PUERTO || 4000);
}
bootstrap();