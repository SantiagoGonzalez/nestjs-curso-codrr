import { IProject } from "interfaces/project.interface";
import { Column, Entity } from "typeorm";
import { BaseEntity as AppBaseEntity } from "../../config/base.entity";

@Entity({name:'projects'})
export class ProjectsEntity extends AppBaseEntity implements IProject{
    @Column()
    name:string;
    @Column()
    description:string;
}