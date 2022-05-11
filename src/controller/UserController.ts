import { Request, Response } from "express";

export class UserController{
    signup(req: Request, res: Response) {
        //console.log(req.body);
        const {name, role, email, password} = req.body;
        console.log(name, role, email, password);
    }
    
}