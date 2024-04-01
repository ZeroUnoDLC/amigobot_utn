import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Chat } from './chat.Entity';
import { UsuarioRol } from './usuario_rol.Entity';

@Entity({ name: 'TBL_CHAT_USUARIO', schema: 'BOTUTN' })
export class ChatUsuario {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @ManyToOne(() => Chat, chat => chat.chatUsuarios)
    @JoinColumn({ name: 'ID_CHAT' })
    chat: Chat;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdChatUsuarios)
    @JoinColumn({ name: 'USUARIO_CREATED' })
    usuarioCreated: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.interactedChatUsuarios)
    @JoinColumn({ name: 'USUARIO_INTERACTED' })
    usuarioInteracted: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdByChatUsuarios)
    @JoinColumn({ name: 'CREATEDBY' })
    createdBy: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedByChatUsuarios)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedBy: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedByChatUsuarios)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedBy: UsuarioRol;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;  
}
