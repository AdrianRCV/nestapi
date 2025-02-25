import { Controller, Post, Body, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt'; 
import { RegisterDto } from 'src/usuario/dto/register.dto'; 

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}
  
  @Post('register')
  @HttpCode(HttpStatus.CREATED) 
  async register(@Body() body: RegisterDto) {
    try {
      const user = await this.authService.register(body.nombre, body.email, body.password);
      return { message: 'Cuenta creada exitosamente', user };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException('Error creando la cuenta', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}
