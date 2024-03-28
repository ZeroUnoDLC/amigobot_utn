import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from 'src/entities/solicitudes.Entity';

@Module({
    imports:[TypeOrmModule.forFeature([Solicitud])]
})
export class SolicitudesModule {}
