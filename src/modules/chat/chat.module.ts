import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from 'src/entities/chat.entity';

@Module({
imports:[TypeOrmModule.forFeature([Chat])]
})
export class ChatModule {}
