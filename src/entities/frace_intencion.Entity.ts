import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Intencion } from './intencion.entity';
import { UsuarioRol } from './usuario_rol.entity';

@Entity({ name: 'TBL_FRACE_INTENCION', schema: 'BOTUTN' })
export class FraceIntencion {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @ManyToOne(() => Intencion, intencion => intencion.fraceIntenciones)
    idIntencion: Intencion;

    @Column({ name: 'FRACE', type: 'varchar', length: 200 })
    frace: string;
a
    @Column({ name: 'ACTIVO', type: 'number' })
    activo: number;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdFraceIntenciones)
    createdBy: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedFraceIntenciones)
    updatedBy: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedFraceIntenciones)
    deletedBy: UsuarioRol;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;
}
