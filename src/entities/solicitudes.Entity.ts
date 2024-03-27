import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity({ name: 'TBL_SOLICITUDES', schema: 'BOTUTN' })

export class Solicitud {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'SOLICITANTE', type: 'number' })
    solicitante: number;

    @Column({ name: 'REACCION', type: 'number' })
    reaccion: number;

    @Column({ name: 'ID_SESSION', type: 'number' })
    idSession: number;

    @Column({ name: 'ACCION', type: 'number' })
    accion: number;

    @Column({ name: 'CONVERSATIONID', type: 'varchar', length: 200 })
    conversationId: string;

    @Column({ name: 'CREATEDBY', type: 'number' })
    createdBy: number;

    @Column({ name: 'UPDATEDBY', type: 'number' })
    updatedBy: number;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;
}
