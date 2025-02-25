import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  nombre: string;
  @IsEmail()
  email: string;
  @MinLength(6)
  password: string;
}
