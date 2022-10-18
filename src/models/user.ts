import { Recado } from "./recado";
import crypto from "crypto"

export class User {
    private _id: string;
    get id(){
        return this._id;
    }

    private _email: string;
    get email(){
        return this._email;
    }

    private _password: string;
    get password(){
        return this._password;
    }

    private _repassword: string;
    get repassword(){
        return this._repassword
    }

    private _Recados: Recado[] = [];
    get Recados(): Recado[] {
        return this._Recados
    }     
    
    constructor(email: string, password: string, repassword:string){
        this._id = crypto.randomUUID();
        this._email = email;
        this._password = password;
        this._repassword = repassword
        this._Recados = []
    }

    updateUser(email: string, password: string, repassword: string){
        this._email = email;
        this._password = password;
        this._repassword = repassword
    }

    addRecado(recado: Recado){
        this._Recados.push(recado)
    }

    toJson(){
        return{
            email: this._email,
            password: this._password,
            repassword: this._repassword,
        };       
    }
}

const scrap = new Recado("Despesa", "Pagar conta de Luz")