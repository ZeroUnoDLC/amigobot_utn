import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from 'src/entities/comentario.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Comentario])]
})
export class ComentarioModule {}
