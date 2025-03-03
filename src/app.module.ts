import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { AlumnoModule } from './alumno/alumno.modulle';
import { AutorModule } from './_biblioteca/autor/autor.module';
import { LibroModule } from './_biblioteca/libro/libro.module';
import { ApiModule } from './api/api.module';
import { CategoriaModule } from './_recambios/categoria/categoria.module';
import { PiezaModule } from './_recambios/pieza/pieza.module';
import { ProveedorModule } from './_recambios/proveedor/proveedor.module';
import { SuministraModule } from './_recambios/suministra/suministra.module';
import { AuthModule } from './auth.module';


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
    AutorModule,
    LibroModule,
    ApiModule,
    CategoriaModule,
    PiezaModule,
    ProveedorModule,
    SuministraModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}