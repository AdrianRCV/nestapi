import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    find() {
        return "Hola Mundo!!"
    }
    @Get('holamundo')
    getHelloInProducts(): string {
        return "Estamos en productos!!!";
    }
    @Post()
    insertaProducts():string{
        return "Producto insertado"
    }
    @Put()
    actualizaProducts():string{
            return "Producto actualizado"
    }
    @Delete()
    borrarProducts():string{
        return "Producto Borrado"
    }
}
