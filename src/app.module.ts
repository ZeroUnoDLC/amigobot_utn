import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ChatUsuarioModule } from './modules/chat_usuario/chat_usuario.module';
import { ChatModule } from './modules/chat/chat.module';
import { ComentarioModule } from './modules/comentario/comentario.module';
import { DisponibilidadBotModule } from './modules/disponibilidad_bot/disponibilidad_bot.module';
import { FraceIntencionModule } from './modules/frace_intencion/frace_intencion.module';
import { IntencionModule } from './modules/intencion/intencion.module';
import { MessageModule } from './modules/message/message.module';
import { RolModule } from './modules/rol/rol.module';
import { SessionModule } from './modules/session/session.module';
import { SolicitudesModule } from './modules/solicitudes/solicitudes.module';
import { UsuarioRolModule } from './modules/usuario_rol/usuario_rol.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ChatUsuarioModule,
    ChatModule,
    ComentarioModule,
    DisponibilidadBotModule,
    FraceIntencionModule,
    IntencionModule,
    MessageModule,
    RolModule,
    SessionModule,
    SolicitudesModule,
    UsuarioRolModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
