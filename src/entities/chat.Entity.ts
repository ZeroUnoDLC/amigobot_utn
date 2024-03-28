import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { ChatUsuario } from './chat_usuario.entity';
import { Message } from './message.Entity';

@Entity({ name: 'TBL_CHAT', schema: 'BOTUTN' })
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

    @OneToMany(() => ChatUsuario, chatUsuario => chatUsuario.chat)
    chatUsuarios: ChatUsuario[];

    //Relación con message 
    @OneToMany(() => Message, message => message.chat)
    message: Message[];
}
