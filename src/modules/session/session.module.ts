import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from 'src/entities/session.Entity';

@Module({
    imports:[TypeOrmModule.forFeature([Session])]
})
export class SessionModule {}
