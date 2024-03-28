import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Session } from './session.Entity';
import { UsuarioRol } from './usuario_rol.Entity';
import { Chat } from './chat.Entity';


@Entity({ name: 'TBL_MESSAGE', schema: 'BOTUTN' })
export class Message {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'ID_USUARIO', type: 'number' })
    idUsuario: number;

    @Column({ name: 'ID_CHAT', type: 'number' })
    idChat: number;

    @Column({ name: 'CONTENIDO', type: 'varchar', length: 800 })
    contenido: string;

    @Column({ name: 'ANSWERBY', type: 'number' })
    answerBy: number;

    @Column({ name: 'ID_SESSION', type: 'number' })
    idSession: number;

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

    // Relación con UsuarioRol (ANSWERBY)
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.answerMessages)
    @JoinColumn({ name: 'ANSWERBY' })
    answeredBy: UsuarioRol;

    // Relación con Chat (ID_CHAT)
    @ManyToOne(() => Chat, chat => chat.messages)
    @JoinColumn({ name: 'ID_CHAT' })
    chat: Chat;

    // Relación con Session (ID_SESSION)
    @ManyToOne(() => Session, session => session.message)
    @JoinColumn({ name: 'ID_SESSION' })
    session: Session;

    // Relación con UsuarioRol (ID_USUARIO)
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.messages)
    @JoinColumn({ name: 'ID_USUARIO' })
    user: UsuarioRol;
}
