import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioRol } from './usuario_rol.Entity';
import { FraceIntencion } from './frace_intencion.Entity';

@Entity({ name: 'TBL_INTENCION', schema: 'BOTUTN' })
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

    //Relacion con UsuarioRol
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdIntenciones)
    @JoinColumn({ name: 'CREATEDBY' })
    createdByUsuarioRol: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedIntenciones)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedByUsuarioRol: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedIntenciones)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedByUsuarioRol: UsuarioRol;

    //Relacion con FraceIntencion
    @OneToMany(() => FraceIntencion, fraceIntencion => fraceIntencion.idIntenciones)
    fraceIntencion: FraceIntencion[];
}
