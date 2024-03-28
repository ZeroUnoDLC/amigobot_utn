import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.Entity';

@Module({
    imports:[TypeOrmModule.forFeature([Message])]
})
export class MessageModule {}
