import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../database/models/User';

class userController {
    async execute(req: Request, res:Response){
        const repository = getRepository(User);
        const { name, email, password} = req.body;
        const { secret, expiresIn } = authConfig.jwt;
        const user = await repository.findOne({ where: { email:email }});

        if(!user) {
            throw new Error("Usuário não encontrado.");
        }

        const isValidPassword = bcrypt.compare(password, user.password);

        if(!isValidPassword){
            throw new Error("Senha inválida.");
        }

        try{
            const token = jwt.sign({id: user.id}, secret, { expiresIn });

            return res.json({
                userId: user.id,
                token
            });
        }catch(err){
            throw new Error(err.message);
        }
       

    }
}

export default new userController();