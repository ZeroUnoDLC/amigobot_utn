import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ChatUsuario } from './chat_usuario.Entity'; 
import { FraceIntencion } from './frace_intencion.Entity'; 
import { Intencion } from './intencion.Entity'; 
import { Message } from './message.Entity'; 
import { Session } from './session.Entity'; 
import { Solicitud } from './solicitudes.Entity';
import { Usuario } from './usuario.Entity'; 
import { Rol } from './rol.Entity';

@Entity({ name: 'TBL_USUARIO_ROL', schema: 'BOTUTN' })
export class UsuarioRol {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'ID_USUARIO', type: 'number' })
    idUsuario: number;

    @Column({ name: 'ID_ROL', type: 'number' })
    idRol: number;

    @Column({ name: 'ACTIVO', type: 'number' })
    activo: number;

    @Column({ name: 'VERIFICADO', type: 'number' })
    verificado: number;

    @Column({ name: 'CONECTADO', type: 'number' })
    conectado: number;

    @Column({ name: 'CONECTEDAT', type: 'timestamp' })
    connectedAt: Date;

    @Column({ name: 'CREATEDBY', type: 'number' })
    createdBy: number;

    @Column({ name: 'UPDATEDBY', type: 'number' })
    updatedBy: number;

    @Column({ name: 'DELETEDBY', type: 'number' })
    deletedBy: number;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;

    //Relaciones con chatUsuario
    @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.usuarioCreated)
    createdChatUsuarios: ChatUsuario[];

    @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.usuarioInteracted)
    interactedChatUsuarios: ChatUsuario[];

    @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.createdBy)
    createdByChatUsuarios: ChatUsuario[];

    @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.updatedBy)
    updatedByChatUsuarios: ChatUsuario[];

    @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.deletedBy)
    deletedByChatUsuarios: ChatUsuario[];

    // Relaciones con FraceIntencion
    @OneToMany(() => FraceIntencion, fraceIntencion => fraceIntencion.createdByUsuarioRol)
    createdFraceIntenciones: FraceIntencion[];

    @OneToMany(() => FraceIntencion, fraceIntencion => fraceIntencion.updatedByUsuarioRol)
    updatedFraceIntenciones: FraceIntencion[];

    @OneToMany(() => FraceIntencion, fraceIntencion => fraceIntencion.deletedByUsuarioRol)
    deletedFraceIntenciones: FraceIntencion[];

    // Relaciones con Intencion
    @OneToMany(() => Intencion, intencion => intencion.createdByUsuarioRol)
    createdIntencion: Intencion[];

    @OneToMany(() => Intencion, intencion => intencion.updatedByUsuarioRol)
    updatedIntencion: Intencion[];

    @OneToMany(() => Intencion, intencion => intencion.deletedByUsuarioRol)
    deletedIntencion: Intencion[];

    //Relaciones con message
    @OneToMany(() => Message, message => message.usuarioRol)
    message: Message[];

    @OneToMany(() => Message, message => message.user)
    messages: Message[];

    //Relaciones con session 
    @OneToMany(() => Session, session => session.usuario)
    sessions: Session[];

    @OneToMany(() => Session, session => session.createdByUsuario)
    createdSessions: Session[];

    @OneToMany(() => Session, session => session.updatedByUsuario)
    updatedSessions: Session[];

    @OneToMany(() => Session, session => session.deletedByUsuario)
    deletedSessions: Session[];

    //Relaciones con solicitudes
    @OneToMany(() => Solicitud, solicitud => solicitud.solicitanteUsuario)
    solicitudesSolicitante: Solicitud[];

    @OneToMany(() => Solicitud, solicitud => solicitud.reaccionUsuario)
    solicitudesReaccion: Solicitud[];

    //Relaciones con usuario
    @OneToMany(() => Usuario, usuario => usuario.updatedByUsuario)
    updatedUser: Usuario[];

    @OneToMany(() => Usuario, usuario => usuario.createdByUsuario)
    createdUser: Usuario[];

    @OneToMany(() => Usuario, usuario => usuario.deletedByUsuario)
    deletedUser: Usuario[];

    //Relaciones de muchos a uno con la entidad Rol
    @ManyToOne(() => Rol, rol => rol.usuarioRol)
    @JoinColumn({ name: 'ID_ROL' })
    rol: Rol;

    // Relaciones de muchos a uno con la entidad "Usuario"
    @ManyToOne(() => Usuario, usuario => usuario.usuarioRoles)
    @JoinColumn({ name: 'ID_USUARIO' })
    usuario: Usuario;

    //RELACIONES RECURSICAS
    // Relación de "DELETEDBY" con la misma tabla "TBL_USUARIO_ROL"
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedByUsuarioRol)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedByRol: UsuarioRol;

    @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.deletedByRol)
    deletedByUsuarioRol: UsuarioRol[];

    // Relación de "UPDATEDBY" con la misma tabla "TBL_USUARIO_ROL"
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedByUsuarioRol)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedByRol: UsuarioRol;

    @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.updatedByRol)
    updatedByUsuarioRol: UsuarioRol[];
}
