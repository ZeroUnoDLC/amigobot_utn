import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Comentario } from './comentario.entity'; 
import { Message } from './message.entity'; 
import { UsuarioRol } from './usuario_rol.entity'; 
import { Solicitud } from './solicitudes.Entity';

@Entity({ name: 'TBL_SESSION', schema: 'BOTUTN' })
export class Session {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'ID_USUARIO', type: 'number' })
    idUsuario: number;

    @Column({ name: 'INICIO', type: 'timestamp' })
    inicio: Date;

    @Column({ name: 'FIN', type: 'timestamp' })
    fin: Date;

    @Column({ name: 'TOKEN', type: 'varchar', length: 200 })
    token: string;

    @Column({ name: 'CALIFICACION', type: 'number' })
    calificacion: number;

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

    @OneToMany(() => Comentario, comentario => comentario.idSession)
    comentarios: Comentario[];

    // Relaciones faltantes con UsuarioRol
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.sessions)
    @JoinColumn({ name: 'ID_USUARIO' })
    usuario: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdSessions)
    @JoinColumn({ name: 'CREATEDBY' })
    createdByUsuario: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedSessions)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedByUsuario: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedSessions)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedByUsuario: UsuarioRol;

    // Relaciones para Message
    @OneToMany(() => Message, message => message.session)
    messages: Message[];

    //Relaciones con solicitudes
    @OneToMany(() => Solicitud, solicitud=> solicitud.session)
    solicitudes: Solicitud[];
}
