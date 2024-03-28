import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { FraceIntencion } from './frace_intencion.entity';
import { UsuarioRol } from './usuario_rol.entity';

@Entity({ name: 'TBL_INTENCION', schema: 'BOTUTN' })
export class Intencion {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'NOMBRE', type: 'varchar', length: 80 })
    nombre: string;

    @Column({ name: 'DESCRIPCION', type: 'varchar', length: 500 })
    descripcion: string;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdIntenciones)
    @JoinColumn({ name: 'CREATEDBY' })
    createdBy: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedIntenciones)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedBy: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedIntenciones)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedBy: UsuarioRol;

    @CreateDateColumn({ name: 'CREATEDAT', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATEDAT', type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'DELETEDAT', type: 'timestamp' })
    deletedAt: Date;

    @OneToMany(() => FraceIntencion, fraceIntencion => fraceIntencion.idIntencion)
    fraceIntenciones: FraceIntencion[];
}
