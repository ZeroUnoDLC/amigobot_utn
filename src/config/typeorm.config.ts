import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Chat } from "src/entities/chat.Entity";
import { ChatUsuario } from "src/entities/chat_usuario.Entity";
import { Comentario } from "src/entities/comentario.Entity";
import { DisponibilidadBot } from "src/entities/disponibilidad_bot.Entity";
import { FraceIntencion } from "src/entities/frace_intencion.Entity";
import { Intencion } from "src/entities/intencion.Entity";
import { Message } from "src/entities/message.Entity";
import { Rol } from "src/entities/rol.Entity";
import { Session } from "src/entities/session.Entity";
import { Solicitud } from "src/entities/solicitudes.Entity";
import { Usuario } from "src/entities/usuario.Entity";
import { UsuarioRol } from "src/entities/usuario_rol.Entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'oracle',
    host: 'localhost',
    port: 1521,
    username: 'testing',
    password: '0988188838',
    serviceName: 'XEPDB1',
    autoLoadEntities: false,
    synchronize: true,
    entities: [ChatUsuario, Chat, Comentario, DisponibilidadBot, FraceIntencion, Intencion,
    Message, Rol, Session, Solicitud, UsuarioRol, Usuario]
};