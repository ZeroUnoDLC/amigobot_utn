import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Index} from 'typeorm';

@Entity({ name: 'TBL_DISPONIBILIDAD_BOT', schema: 'BOTUTN' })
@Index("SYS_C008230", ["id"])

export class DisponibilidadBot {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'DIA', type: 'varchar', length: 20 })
    dia: string;

    @Column({ name: 'HORA_INICIO', type: 'varchar', length: 20 })
    horaInicio: string;

    @Column({ name: 'HORA_FIN', type: 'varchar', length: 20 })
    horaFin: string;

    @Column({ name: 'ACTIVO', type: 'number' })
    activo: number;

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
