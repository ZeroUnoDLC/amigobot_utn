import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,Index } from 'typeorm';

@Entity({ name: 'TBL_COMENTARIO', schema: 'BOTUTN' })
@Index("IDX_FK_TBL_COMENTARIO_TBL_SESSION", ["idSession"]) 
@Index("SYS_C008225", ["id"]) 

export class Comentario {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'CONTENIDO', type: 'varchar', length: 800 })
    contenido: string;

    @Column({ name: 'CORREO', type: 'varchar', length: 200 })
    correo: string;

    @Column({ name: 'ID_SESSION', type: 'number' })
    idSession: number;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;
}
