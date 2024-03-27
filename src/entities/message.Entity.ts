import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,Index } from 'typeorm';

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
}
