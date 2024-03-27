import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Index } from 'typeorm';
import { Chat } from './chat.entity';
import { Usuario } from './usuario.entity';
import { UsuarioRol } from './usuario_rol.entity'; 

@Entity({ name: 'TBL_CHAT_USUARIO', schema: 'BOTUTN' })
@Index("IDX_FK_TBL_CHAT_USUARIO_TBL_CHAT", ["idChat"])
@Index("IDX_FK_TBL_CHAT_USUARIO_TBL_USUARIO_CREATED", ["usuarioCreated"])
@Index("IDX_FK_TBL_CHAT_USUARIO_TBL_USUARIO_INTERACTED", ["usuarioInteracted"])
@Index("IDX_FK_TBL_CHAT_USUARIO_TBL_USUARIO_ROL_CREATED", ["createdBy"]) 
@Index("IDX_FK_TBL_CHAT_USUARIO_TBL_USUARIO_ROL_DELETED", ["deletedBy"])
@Index("IDX_FK_TBL_CHAT_USUARIO_TBL_USUARIO_ROL_UPDATED", ["updatedBy"])
@Index("SYS_C008224", ["id"])
export class ChatUsuario {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'USUARIO_CREATED', type: 'number' })
    usuarioCreated: number;

    @Column({ name: 'USUARIO_INTERACTED', type: 'number' })
    usuarioInteracted: number;

    @Column({ name: 'ID_CHAT', type: 'number' })
    idChat: number;

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

    // @ManyToOne(() => Chat, chat => chat.chatUsuarios)
    // chat: Chat;

    // @ManyToOne(() => Usuario, usuario => usuario.chatUsuariosCreated)
    // usuarioCreador: Usuario;

    // @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.chatUsuariosCreated) 
    // usuarioRolCreador: UsuarioRol; 
}