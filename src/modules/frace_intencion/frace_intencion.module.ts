import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FraceIntencion } from 'src/entities/frace_intencion.Entity';

@Module({
    imports:[TypeOrmModule.forFeature([FraceIntencion])]
})
export class FraceIntencionModule {}
