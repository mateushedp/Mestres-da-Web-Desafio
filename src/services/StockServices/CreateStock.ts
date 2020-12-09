import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Stock } from '../../database/models/Stock';
import { Product } from '../../database/models/Product';


class StockController {
    async execute(req: Request, res:Response){
        const productRepository = getRepository(Product);
        const stockRepository = getRepository(Stock);
        const productId = req.params.id;
        const { size, quantity } = req.body;
        const product = await productRepository.findOne({ where: { id:productId }});

        if(!product){
            throw new Error("Produto não encontrado.");
        }  
        
        const stock = stockRepository.create({ size, quantity});
        stock.product = product;
        console.log(stock);
        await stockRepository.save(stock);
        return res.json(stock);

    }
}

export default new StockController; 