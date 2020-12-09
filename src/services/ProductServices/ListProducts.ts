import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../database/models/Product';


class ProductController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Product);
        const products = await repository.find();

        if(!products){
            throw new Error("Nenhum produto encontrado.");
        }

        return res.json(products);
    }
}

export default new ProductController; 