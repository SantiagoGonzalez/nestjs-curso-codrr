import { IUser } from "interfaces/user.interface";
import { Column, Entity } from "typeorm";
import { BaseEntity as AppBaseEntity } from "../../config/base.entity";

@Entity({name:'users'})
export class UsersEntity extends AppBaseEntity implements IUser{
    @Column()
    firstName : string; 
    @Column()
    lastName : string;
    @Column()
    age : number;
    @Column()
    email : string;
    @Column()
    username : string;
    @Column()
    password : string;
    @Column()
    role : string;
}