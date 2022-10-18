import { NextFunction, Request, Response } from "express";
import { usersDB } from "../db/users";

class checkUserExists {
    static checkuser (request: Request, response: Response, next: NextFunction){
    const {userID} = request.params;
    const user = usersDB.find((u)=>u.id === userID)       
    if(!user) return response.status(404).json({error: "--O usuário não foi encontrado--"});     
    next() 
}
   
}

export const checkUserExistsMiddleware = [
    //
    checkUserExists.checkuser, 

]