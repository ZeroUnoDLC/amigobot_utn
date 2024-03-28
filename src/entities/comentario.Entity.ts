import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Session } from './session.Entity';

@Entity({ name: 'TBL_COMENTARIO', schema: 'BOTUTN' })
export class Comentario {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'CONTENIDO', type: 'varchar', length: 800 })
    contenido: string;

    @Column({ name: 'CORREO', type: 'varchar', length: 200 })
    correo: string;

    @ManyToOne(() => Session, session => session.comentarios)
    idSession: Session;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;
}
