import isAuth from '../middlewares/isAuth';
import isAdmin from '../middlewares/isAdmin';

import { Router } from 'express';

import CreateStockService from '../services/StockServices/CreateStock';
import ListStockService from '../services/StockServices/ListStocks';

const router = Router();

router.post('/:id', isAuth, isAdmin, CreateStockService.execute);
router.get('/:id', isAuth, isAdmin, ListStockService.execute);

export default router;
