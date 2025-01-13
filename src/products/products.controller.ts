import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    findProducts():string{
        return "Total de productos en el aula 2ASIR"
    }
    @Get('camiseta')
    findDetalle():string{
        return "Total de camisetas!!"; 
    }
    @Get('camiseta/roja')
    findAdios():string{
        return "Total de camisetas rojas!!"; 
    }    
    @Get('hot')
    findHot(){
        return "Productos calientes!"
    }
    @Get(':id')
    findByid(@Param() parametros:any):string{
        return `Obteniendo productos del parámetro ${parametros.id}`
    }
    @Get(':id/:size')
    findByIDSize(@Param() parametros:any):string{
        return `Obteniendo productos del tipo ${parametros.id} y tamaño ${parametros.size}`
    }
    @Post()
    insertaProducts():string{
        return "Producto insertado"
    }
    @Put()
    actualizaProducts():string{
        return "Producto ACTUALIZADO"
    }

    @Delete()
    borraProducts():string{
        return "Producto Borrado"
    }

}