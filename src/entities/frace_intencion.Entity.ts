import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,Index } from 'typeorm';

@Entity({ name: 'TBL_FRACE_INTENCION', schema: 'BOTUTN' })
@Index("IDX_FK_TBL_FRACE_INTENCION_TBL_INTENCION", ["idIntencion"])
@Index("IDX_FK_TBL_FRACE_INTENCION_TBL_USUARIO_ROL_CREATED", ["createdBy"])
@Index("IDX_FK_TBL_FRACE_INTENCION_TBL_USUARIO_ROL_DELETED", ["deletedBy"])
@Index("IDX_FK_TBL_FRACE_INTENCION_TBL_USUARIO_ROL_UPDATED", ["updatedBy"])
@Index("SYS_C008234", ["id"])

export class FraceIntencion {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'ID_INTENCION', type: 'number' })
    idIntencion: number;

    @Column({ name: 'FRACE', type: 'varchar', length: 200 })
    frace: string;

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
