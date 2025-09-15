import { IUser } from "../../../interfaces/user.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity as AppBaseEntity } from "../../config/base.entity";
import { ROLES } from "../../constants/roles";
import { UsersProjectsEntity } from "./usersProjects.entity";

@Entity({name:'users'})
export class UsersEntity extends AppBaseEntity implements IUser{
    @Column()
    firstName : string; 
    @Column()
    lastName : string;
    @Column()
    age : number;
    @Column({unique :true})
    email : string;
    @Column({unique :true})
    username : string;
    @Column()
    password : string;

    //PARA DEFINIRLO COMO ENUM
    @Column({type: 'enum', enum:ROLES})
    role : ROLES;

    //relacion con los projects (a que proyectos pertenece este user)
    @OneToMany(()=>UsersProjectsEntity, (usersProject)=>usersProject.user)
    projectsIncludes: UsersProjectsEntity[]
}