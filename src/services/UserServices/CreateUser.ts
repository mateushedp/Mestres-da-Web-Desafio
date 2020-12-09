import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../database/models/User';

class UserController {
    async execute(req: Request, res:Response){
        const repository = getRepository(User);
        const { name, email, password } = req.body;

        const userExists = await repository.findOne({where:{email}});

        if(userExists){
            throw new Error("Usuário já existente.");
        }

        const user = repository.create({name, email, password});
        await repository.save(user);
        return res.json(user);
    }
}

export default new UserController();