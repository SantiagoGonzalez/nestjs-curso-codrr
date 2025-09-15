import { IProject } from "../../../interfaces/project.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity as AppBaseEntity } from "../../config/base.entity";
import { UsersProjectsEntity } from "../../projects/entities/usersProjects.entity";

@Entity({name:'projects'})
export class ProjectsEntity extends AppBaseEntity implements IProject{
    @Column()
    name:string;
    @Column()
    description:string;


    //relacion con los users (que * users participan del project)
    @OneToMany(()=>UsersProjectsEntity, (usersProject)=>usersProject.project)
    usersIncludes: UsersProjectsEntity[]
}