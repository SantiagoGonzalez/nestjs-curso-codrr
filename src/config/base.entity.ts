import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity{
    
    @PrimaryGeneratedColumn('uuid') //para PK
    id: string;
    @CreateDateColumn({
        type:'timestamp',
        name:'created_at'
    }) //para creacion
    createdAt: Date;

    @UpdateDateColumn({
        type:'timestamp',
        name:'created_at'
    }) //para update
    
    updatedAt: Date;
}