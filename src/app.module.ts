import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { AutorModule } from './_biblioteca/autor/autor.module';
import { LibroModule } from './_biblioteca/libro/libro.module';
import { ApiModule } from './api/api.module';
import { ProductoModule } from './_1caso-n-n/producto/producto.module';
import { ProductotallaModule } from './_1caso-n-n/productotalla/productotalla.module';
import { TallaModule } from './_1caso-n-n/talla/talla.module';
import { Producto2Module } from './_2caso-n-n/producto2/producto2.module';
import { Talla2Module } from './_2caso-n-n/talla2/talla2.module';
import { ProfileModule } from './_caso1-1/profile/profile.module';
import { UserModule } from './_caso1-1/user/user.module';
import { PostsModule } from './_caso1-n/posts/posts.module';
import { UsersModule } from './_caso1-n/users/users.module';
import { CategoriaModule } from './_recambios/categoria/categoria.module';
import { PiezaModule } from './_recambios/pieza/pieza.module';
import { ProveedorModule } from './_recambios/proveedor/proveedor.module';
import { SuministraModule } from './_recambios/suministra/suministra.module';
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
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
    AutorModule,
    LibroModule,
    ApiModule,
    ProductoModule,
    ProductotallaModule,
    TallaModule,
    Producto2Module,
    Talla2Module,
    ProfileModule,
    UserModule,
    PostsModule,
    UsersModule,
    CategoriaModule,
    PiezaModule,
    ProveedorModule,
    SuministraModule,
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