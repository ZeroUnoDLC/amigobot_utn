import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatUsuario } from 'src/entities/chat_usuario.Entity';

@Module({
    imports: [TypeOrmModule.forFeature([ChatUsuario])]
})
export class ChatUsuarioModule {}
