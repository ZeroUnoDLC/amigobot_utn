import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,Index } from 'typeorm';

@Entity({ name: 'TBL_INTENCION', schema: 'BOTUTN' })
@Index("IDX_FK_TBL_INTENCION_TBL_USUARIO_ROL_CREATED", ["createdBy"])
@Index("IDX_FK_TBL_INTENCION_TBL_USUARIO_ROL_DELETED", ["deletedBy"])
@Index("IDX_FK_TBL_INTENCION_TBL_USUARIO_ROL_UPDATED", ["updatedBy"])
@Index("SYS_C008237", ["id"])

export class Intencion {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'NOMBRE', type: 'varchar', length: 80 })
    nombre: string;

    @Column({ name: 'DESCRIPCION', type: 'varchar', length: 500 })
    descripcion: string;

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
