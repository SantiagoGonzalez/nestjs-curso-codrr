import { BaseEntity } from "../../config/base.entity";
import { ACCESS_LEVEL } from "../../constants/roles";
import { Column, Entity, ManyToOne } from "typeorm";
import { UsersEntity } from "./users.entity";
import { ProjectsEntity } from "../../users/entities/projects.entity";


@Entity({name : 'users_projects'})
export class UsersProjectsEntity extends BaseEntity {

    @Column({type :'enum',enum:ACCESS_LEVEL})
    accessLevel : ACCESS_LEVEL

    //define una funcion que apunta a la entidad, y otra que llama al user y le pega al atributo que los relaciona
    @ManyToOne (()=>UsersEntity, (user)=>user.projectsIncludes)
    user: UsersEntity

    @ManyToOne (()=>ProjectsEntity, (project)=>project.usersIncludes)
    project: ProjectsEntity
    
}