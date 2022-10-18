import {Request, Response} from "express";
import { usersDB } from "../db/users";
import { Recado } from "../models/recado";

export class GetAllUsersController {
    getAll(request: Request, response: Response){
    const data = usersDB.map((user)=> {
        return {
            id: user.id,
            email: user.email,
            password: user.repassword,
            repassword: user.repassword,
            Recado: user.Recados,
        }    
    });
    return response.json(data)
    }
}