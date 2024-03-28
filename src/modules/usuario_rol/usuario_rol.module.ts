import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRol } from 'src/entities/usuario_rol.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioRol])]
})
export class UsuarioRolModule {}
