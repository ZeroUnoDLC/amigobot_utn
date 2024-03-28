import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UsuarioRol } from './usuario_rol.Entity';

@Entity({ name: 'TBL_ROL', schema: 'BOTUTN' })

export class Rol {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'NOMBRE', type: 'varchar', length: 80 })
    nombre: string;

    @Column({ name: 'DESCRIPCION', type: 'varchar', length: 100 })
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

    //Relacion
    @OneToMany(() => UsuarioRol, usuarioRol=> usuarioRol.rol)
    usuarioRol: UsuarioRol[];
}
