import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PracticaModule } from './evaluacion/practica/practica.module';
import { AlumnoModule } from './evaluacion/alumno/alumno.module';
import { ProfesorModule } from './evaluacion/profesor/profesor.module';
import { ExamenTeoricoModule } from './evaluacion/examen_teorico/examen_teorico.module';
import { AlumnopracticaModule } from './evaluacion/alumnopractica/alumnopractica.module';
import { AlumnoexamenModule } from './evaluacion/alumnoexamen/alumnoexamen.module';
import { ProfesorpracticaModule } from './evaluacion/profesorpractica/profesorpractica.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}),
    TypeOrmModule.forRoot({
      name:'base1',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username: 'root',
      password:process.env.PASSWORD,
      database: process.env.DBNAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'base2',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username: 'root',
      password:process.env.PASSWORD,
      database: process.env.DBNAME2,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    AlumnoModule,
    PracticaModule,
    ProfesorModule,
    ExamenTeoricoModule,
    AlumnopracticaModule,
    AlumnoexamenModule,
    ProfesorpracticaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}