import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from 'src/entities/rol.Entity';

@Module({
    imports: [TypeOrmModule.forFeature([Rol])]
})
export class RolModule {}
