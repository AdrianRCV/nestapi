import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';  
import { ConfigModule } from '@nestjs/config'; 
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario],"base1"),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_secret_key',  
      signOptions: { expiresIn: '15m' },  
    }),
    ConfigModule.forRoot(),  
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
