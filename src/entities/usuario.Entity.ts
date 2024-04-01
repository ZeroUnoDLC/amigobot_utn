import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { UsuarioRol } from './usuario_rol.Entity';

@Entity({ name: 'TBL_USUARIO', schema: 'BOTUTN' })

export class Usuario {
    @PrimaryColumn({ name: 'ID', type: 'number' })
    id: number;

    @Column({ name: 'FOTO', type: 'varchar', length: 200 })
    foto: string;

    @Column({ name: 'NOMBRES', type: 'varchar', length: 60 })
    nombres: string;

    @Column({ name: 'APELLIDOS', type: 'varchar', length: 60 })
    apellidos: string;

    @Column({ name: 'NOMBRE_COMPLETO', type: 'varchar', length: 120 })
    nombreCompleto: string;

    @Column({ name: 'CORREO', type: 'varchar', length: 100 })
    correo: string;

    @Column({ name: 'TELEFONO', type: 'varchar', length: 15 })
    telefono: string;

    @Column({ name: 'CLAVE', type: 'varchar', length: 100 })
    clave: string;

    @Column({ name: 'ROL', type: 'varchar', length: 100 })
    rol: string;

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

    //Relaciones
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedUser)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedByUsuario: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdUser)
    @JoinColumn({ name: 'CREATEDBY' })
    createdByUsuario: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedUser)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedByUsuario: UsuarioRol;

    //Relacion de uno a muchos con usuario_rol
    @OneToMany(() => UsuarioRol, usuarioRol=> usuarioRol.usuario)
    usuarioRoles: UsuarioRol[];

}
