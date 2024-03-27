import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany, Index } from 'typeorm';
import { ChatUsuario } from './chat_usuario.entity';

@Entity({ name: 'TBL_CHAT', schema: 'BOTUTN' })
@Index("SYS_C008220", ["id"])

export class Chat {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'TIPO', type: 'varchar', length: 20 })
    tipo: string;

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

    // @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.chat)
    // chatUsuarios: ChatUsuario[];
}
