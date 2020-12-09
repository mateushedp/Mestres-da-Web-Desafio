import {Request, Response, NextFunction} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../database/models/User';


export default async function isAdmin(req: Request, res: Response, next: NextFunction) {
    const id = req.userId;
    const repository = getRepository(User);
    const user = await repository.findOne({ where: { id }});
    if(!user){
        throw new Error("Usuário não encontrado.");
    }
    if(!user.role){
        throw new Error("Usuário não é admin.")
    }
    return next();

}