import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../database/models/Product';


class ProductController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Product);
        const id = req.params.id;

        const productExists = await repository.findOne({ where: { id }});
        
        if(!productExists){
            throw new Error("Produto não encontrado.");
        }

        await repository.delete(id);
        return res.json();
    }
}

export default new ProductController; 