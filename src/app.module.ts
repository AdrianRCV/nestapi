import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { AlumnoModule } from './alumno/alumno.module';
import { PokemonesModule } from './pokemones/pokemones.module';
import { PeliculasModule } from './peliculas/peliculas.module';


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
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
    PokemonesModule,
    PeliculasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}