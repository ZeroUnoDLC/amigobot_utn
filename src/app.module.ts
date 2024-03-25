import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConectionModule } from './conection/conection.module';

@Module({
  imports: [
    ConectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
