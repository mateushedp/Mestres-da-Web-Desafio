import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Stock } from '../../database/models/Stock';
import { Product } from '../../database/models/Product';


class StockController {
    async execute(req: Request, res:Response){
        const repository = getRepository(Stock);
        const id = req.params;
        const stocks = await repository.find({relations: ['product'], where: { product: id }});

        if(!stocks){
            throw new Error("Nenhum estoque encontrado.");
        }

        return res.json(stocks);
    }
}

export default new StockController; 