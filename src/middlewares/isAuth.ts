import {Request, Response, NextFunction} from 'express';
import authConfig from "../config/auth";
import jwt from 'jsonwebtoken';
import auth from '../config/auth';

interface tokenPaylod {
    id: string, 
    iat: number,
    exp: number
}

export default function isAuth(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers;
    const { secret } = authConfig.jwt;

    if(!authorization){
        throw new Error("Usuário não autorizado.");
    }

    const token = authorization.replace('Bearer', '').trim();

    try{
        const decodedToken = jwt.verify(token, secret);
        const { id } = decodedToken as tokenPaylod;
        req.userId = id;
        return next();
    }catch{
        throw new Error("Usuário não autorizado.");
    }

}