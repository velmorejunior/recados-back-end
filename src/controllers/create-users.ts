import { Request, Response} from "express";
import { User } from "../models/user";
import { usersDB } from "../db/users";

export class CreateUserController {
    create(request: Request, response: Response){
        const{email, password, repassword} = request.body;
        const user = new User (email,password,repassword);
        usersDB.push(user);
        return response.json({
            id: user.id,
            email: user.email,
            password: user.password,
            repassword: user.repassword,
            scrap: user.Recados
        })
    }
}