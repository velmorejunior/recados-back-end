import {Request, Response} from "express";
import { usersDB } from "../db/users";

export class UpdateRecadosController {
    updateRecados(request: Request, response: Response){        
        const {userID, id} = request.params;

        const {description, detail} = request.body;

        const user = usersDB.find((user)=> user.id === userID);
     
        if(!user){
            return response.status(404).json({error:"Usuário não encontrado"})
        }

        const recado = user.Recados.find((r)=>r.id === id);
        if(!recado){
            return response.status(404).json({error:"Recado não encontrado"})
        }

        try {
            recado.updateRecado(description, detail);
        } catch(err:any){
            return response.status(400).json({error: err.message});
        }
        return response.json(user);
    }
}