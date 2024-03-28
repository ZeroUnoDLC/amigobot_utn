import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisponibilidadBot } from 'src/entities/disponibilidad_bot.Entity';

@Module({
    imports:[TypeOrmModule.forFeature([DisponibilidadBot])]
})
export class DisponibilidadBotModule {}
