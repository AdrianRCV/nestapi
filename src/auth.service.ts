import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario, 'base1')
    private userRepository:Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async register(nombre: string, email: string, password: string): Promise<any> {
    const existingUser = await this.userRepository.findOne({ where: { nombre } });
    if (existingUser) {
      throw new HttpException('El usuario ya existe', HttpStatus.BAD_REQUEST);
    }
  
    const existingEmail = await this.userRepository.findOne({ where: { email } });
    if (existingEmail) {
      throw new HttpException('El correo electrónico ya está en uso', HttpStatus.BAD_REQUEST);
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ nombre, email, password: hashedPassword });
  
    await this.userRepository.save(newUser);
  
    return { message: 'Usuario registrado correctamente', user: {id: newUser.id, username: newUser.nombre, email: newUser.email}};
  }
}
