import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.Entity';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])]
})
export class UsuarioModule {}
