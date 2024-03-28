import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intencion } from 'src/entities/intencion.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Intencion])]
})
export class IntencionModule {}
