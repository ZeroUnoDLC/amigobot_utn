import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Index } from 'typeorm';
import { ChatUsuario } from './chat_usuario.entity'; 

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

    // @ManyToOne(() => ChatUsuario, chatUsuario => chatUsuario.usuarioRolCreador) 
    // chatUsuariosCreated: ChatUsuario; 
}
