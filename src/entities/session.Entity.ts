import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,Index } from 'typeorm';

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
}
