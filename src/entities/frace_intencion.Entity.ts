import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne , JoinColumn} from 'typeorm';
import { Intencion } from './intencion.Entity';
import { UsuarioRol } from './usuario_rol.Entity';

@Entity({ name: 'TBL_FRACE_INTENCION', schema: 'BOTUTN' })
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

    //Relación con Intención 
    @ManyToOne(() => Intencion, intencion => intencion.fraceIntencion)
    @JoinColumn({ name: 'ID_INTENCION' })
    itencion: Intencion;

    //Relaciones con usuarioRol
    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.createdFraceIntenciones)
    @JoinColumn({ name: 'CREATEDBY' })
    createdByUsuarioRol: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.updatedFraceIntenciones)
    @JoinColumn({ name: 'UPDATEDBY' })
    updatedByUsuarioRol: UsuarioRol;

    @ManyToOne(() => UsuarioRol, usuarioRol => usuarioRol.deletedFraceIntenciones)
    @JoinColumn({ name: 'DELETEDBY' })
    deletedByUsuarioRol: UsuarioRol;
    
}



