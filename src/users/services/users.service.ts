import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getHello() : string{
        return "get Users"
    }
}
