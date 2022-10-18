import {Request, Response} from "express";
import { usersDB } from "../db/users";

export class DeleteRecadoByUserController {
    remove(request: Request, response: Response){        
        const {userID, id} = request.params;

        const {description, detail} = request.body;

        const user = usersDB.find((user)=> user.id === userID);
     
        if(!user){
            return response.status(404).json({error:"Usuário não encontrado"})
        }

        const recadoindex = user.Recados.findIndex((r)=>r.id===id);
        if(recadoindex<0){
            return response.status(404).json({error:"recado não encontrado"})
        }

        try {
            user.Recados.splice(recadoindex,1);
        } catch(err:any){
            return response.status(400).json({error: err.message});
        }
        return response.json(user);
    }
}