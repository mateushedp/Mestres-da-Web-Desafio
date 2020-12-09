import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../database/models/Product';


class ProductController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Product);
        const { title, description, price } = req.body;

        const productExists = await repository.findOne({ where: { title }});

        if(productExists){
            throw new Error("Produto já existente.");
        }

        const product = repository.create({ title, description, price });
        await repository.save(product);
        return res.json(product);
    }
}

export default new ProductController; 